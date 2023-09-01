import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Favorites from "./pages/Favorites";
import Header from "./components/Header/Header";
import { getUserFavoritesAPI, readTeachersPaginateAPI, updateUserFavoritesAPI } from "./services/firebaseAPI";
import { Teacher } from "./utils/types";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebaseConfig";

function App() {
  const [bodyColor, setBodyColor] = useState("#fff");
  const changeColor = (color: string) => {
    setBodyColor(color);
    document.body.style.backgroundColor = color;
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [lastTeacherItem, setLastTeacherItem] = useState<number>(0);
  const [endOfCollection, setEndOfCollection] = useState<boolean>(false);
  const [favoriteTeachers, setFavoriteTeachers] = useState<Teacher[]>(() => {
    try {
      const items = JSON.parse(localStorage.getItem("favoriteTeachers") || "");
      if (items) {
        return items;
      } else {
        return [];
      }
    } catch (error: any) {
      return [];
    }
  });

  const addToFavorites = (id: string) => {
    const teacher = teachers.filter((item) => item.id === id);
    setFavoriteTeachers((prevState) =>
      prevState ? [...prevState, ...teacher] : [...teacher],
    );
  };

  const removeFromFavorites = (id: string) => {
    setFavoriteTeachers((prevState) =>
      prevState.filter((item) => item.id !== id),
    );
  };

  const handleLoadMore = async () => {
    const newTeachers: any = await readTeachersPaginateAPI(lastTeacherItem);
    if (newTeachers) {
      setTeachers((teachers) => [...teachers, ...newTeachers]);
    }
    if (newTeachers.length === 0 || newTeachers.length < 4) {
      setEndOfCollection(true);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  useEffect(() => {
    if (lastTeacherItem === 0) {
      (async () => {
        const newTeachers: any = await readTeachersPaginateAPI(lastTeacherItem);
        if (newTeachers) {
          setTeachers((teachers) => [...teachers, ...newTeachers]);
        }
      })();
    }
  }, []);

  useEffect(() => {
    setLastTeacherItem(teachers.length);
  }, [teachers.length]);
  

  useEffect(() => {
    if (isLoggedIn) {
      try {
        localStorage.setItem(
          "favoriteTeachers",
          JSON.stringify(favoriteTeachers),
        );
      } catch (error: any) {
        console.log(error.message);
      }
      // updateUserFavoritesAPI(favoriteTeachers);
    }
  }, [isLoggedIn, favoriteTeachers]);

  return (
    <div style={{ background: bodyColor }} id="main">
      <Routes>
        <Route path="/" element={<Header isLoggedIn={isLoggedIn} />}>
          <Route index element={<Home changeColor={changeColor} />} />
          <Route
            path="/teachers"
            element={
              <Teachers
                endOfCollection={endOfCollection}
                handleLoadMore={handleLoadMore}
                isLoggedIn={isLoggedIn}
                teachers={teachers}
                favoriteTeachers={favoriteTeachers}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                changeColor={changeColor}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                isLoggedIn={isLoggedIn}
                favoriteTeachers={favoriteTeachers}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                changeColor={changeColor}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
