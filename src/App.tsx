import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Favorites from "./pages/Favorites";
import Header from "./components/Header/Header";
import { readTeachersAPI } from "./services/firebaseAPI";
import { Teacher } from "./utils/types";

function App() {
  const [bodyColor, setBodyColor] = useState("#fff");
  const changeColor = (color: string) => {
    setBodyColor(color);
  };
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [favoriteTeachers, setFavoriteTeachers] = useState<Teacher[]>(() => {
    try {
      const items = JSON.parse(localStorage.getItem("favoriteTeachers") || "");
      if (items) {
        return items;
      } else {
        return [];
      }
    } catch (error: any) {
      console.log(error);
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

  useEffect(() => {
    (async () => {
      const items: any = await readTeachersAPI();
      if (items) {
        setTeachers(items);
      }
    })();
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        "favoriteTeachers",
        JSON.stringify(favoriteTeachers),
      );
    } catch (error: any) {
      console.log(error.message);
    }
  }, [favoriteTeachers]);

  return (
    <div style={{ background: bodyColor }} id="main">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home changeColor={changeColor} />} />
          <Route
            path="/teachers"
            element={
              <Teachers
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
