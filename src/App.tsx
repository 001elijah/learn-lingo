import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Favorites from "./pages/Favorites";
import Header from "./components/Header/Header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
