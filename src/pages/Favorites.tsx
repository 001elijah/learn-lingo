import React, { useEffect } from "react";
import FavoriteTeachersView from "../views/FavoriteTeachersView";
import { Teacher } from "../utils/types";

const Favorites = ({
  favoriteTeachers,
  addToFavorites,
  removeFromFavorites,
  changeColor,
}: {
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
      favoriteTeachers={favoriteTeachers}
      addToFavorites={addToFavorites}
      removeFromFavorites={removeFromFavorites}
    />
  );
};

export default Favorites;
