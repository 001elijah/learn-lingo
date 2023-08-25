import React, { useEffect } from "react";
import TeachersView from "../views/TeachersView";

const Teachers = ({
  favoriteTeachers,
  addToFavorites,
  removeFromFavorites,
  changeColor,
}: {
  favoriteTeachers: [{}];
  addToFavorites: Function;
  removeFromFavorites: Function;
  changeColor: Function;
}) => {
  useEffect(() => {
    changeColor("#f8f8f8");
  }, [changeColor]);

  return (
    <TeachersView
      favoriteTeachers={favoriteTeachers}
      addToFavorites={addToFavorites}
      removeFromFavorites={removeFromFavorites}
    />
  );
};

export default Teachers;
