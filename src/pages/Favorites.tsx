import React, { useEffect } from "react";
import FavoriteTeachersView from "../views/FavoriteTeachersView";
import { Teacher } from "../utils/types";

const Favorites = ({
  isLoggedIn,
  favoriteTeachers,
  addToFavorites,
  removeFromFavorites,
  changeColor,
}: {
  isLoggedIn: boolean;
  favoriteTeachers: Teacher[];
  addToFavorites: Function;
  removeFromFavorites: Function;
  changeColor: Function;
}) => {
  useEffect(() => {
    changeColor("#f8f8f8");
  }, [changeColor]);
  return (
    <FavoriteTeachersView
      isLoggedIn={isLoggedIn}
      favoriteTeachers={favoriteTeachers}
      addToFavorites={addToFavorites}
      removeFromFavorites={removeFromFavorites}
    />
  );
};

export default Favorites;
