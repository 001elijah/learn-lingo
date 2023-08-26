import React, { useEffect } from "react";
import TeachersView from "../views/TeachersView";
import { Teacher } from "../utils/types";

const Teachers = ({
  teachers,
  favoriteTeachers,
  addToFavorites,
  removeFromFavorites,
  changeColor,
}: {
  teachers: Teacher[];
  favoriteTeachers: Teacher[];
  addToFavorites: Function;
  removeFromFavorites: Function;
  changeColor: Function;
}) => {
  useEffect(() => {
    changeColor("#f8f8f8");
  }, [changeColor]);

  return (
    <TeachersView
      teachers={teachers}
      favoriteTeachers={favoriteTeachers}
      addToFavorites={addToFavorites}
      removeFromFavorites={removeFromFavorites}
    />
  );
};

export default Teachers;
