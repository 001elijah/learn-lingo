import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Favorites from "./pages/Favorites";
import Header from "./components/Header/Header";
import { readTeachersPaginateAPI, updateUserFavoritesAPI } from "./services/firebaseAPI";
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
  const [uid, setUid] = useState("");
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [lastTeacherItem, setLastTeacherItem] = useState<number>(0);
  const [endOfCollection, setEndOfCollection] = useState<boolean>(false);
  const [favoriteTeachers, setFavoriteTeachers] = useState<Teacher[]>([]);

  // fetching userFavoriteItems from Firebase
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     (async () => {
  //       const favTeachers: any = await getUserFavoritesAPI(uid);
  //       if (favTeachers) {
  //         console.log(favTeachers);
  //         setFavoriteTeachers([...favTeachers]);
  //       }
  //     })();
  //   }
  // }, [isLoggedIn, uid]);

  useEffect(() => {
    try {
      const items = JSON.parse(localStorage.getItem(uid) || "");
      if (items) {
        setFavoriteTeachers(items);
      } else {
        setFavoriteTeachers([]);
      }
    } catch (error: any) {
      setFavoriteTeachers([]);
    }
  }, [uid])

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
        const { uid } = user;
        setUid(uid);
      } else {
        setIsLoggedIn(false);
        setUid("");
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
          uid,
          JSON.stringify(favoriteTeachers),
        );
      } catch (error: any) {
        console.log(error.message);
      }
      updateUserFavoritesAPI(favoriteTeachers);
    }
  }, [isLoggedIn, uid, favoriteTeachers]);

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
