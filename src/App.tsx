import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Favorites from "./pages/Favorites";
import Header from "./components/Header/Header";

function App() {
  const [bodyColor, setBodyColor] = useState("#fff");
  const changeColor = (color: string) => {
    setBodyColor(color);
  };
  return (
    <div style={{ background: bodyColor }} id="main">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home changeColor={changeColor} />} />
          <Route
            path="/teachers"
            element={<Teachers changeColor={changeColor} />}
          />
          <Route
            path="/favorites"
            element={<Favorites changeColor={changeColor} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
