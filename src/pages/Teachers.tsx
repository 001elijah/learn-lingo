import React, { useEffect } from "react";
import TeachersView from "../views/TeachersView";
import { Teacher } from "../utils/types";

const Teachers = ({
  endOfCollection,
  handleLoadMore,
  isLoggedIn,
  teachers,
  favoriteTeachers,
  addToFavorites,
  removeFromFavorites,
  changeColor,
}: {
  endOfCollection: boolean;
  handleLoadMore: Function;
  isLoggedIn: boolean;
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
      endOfCollection={endOfCollection}
      handleLoadMore={handleLoadMore}
      isLoggedIn={isLoggedIn}
      teachers={teachers}
      favoriteTeachers={favoriteTeachers}
      addToFavorites={addToFavorites}
      removeFromFavorites={removeFromFavorites}
    />
  );
};

export default Teachers;
