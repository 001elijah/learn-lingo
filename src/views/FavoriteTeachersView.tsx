import React from "react";
import FavoriteTeachersList from "../components/FavoriteTeachersList/FavoriteTeachersList";
import { Teacher } from "../utils/types";

const FavoriteTeachersView = ({
  isLoggedIn,
  favoriteTeachers,
  addToFavorites,
  removeFromFavorites,
}: {
  isLoggedIn: boolean;
  favoriteTeachers: Teacher[];
  addToFavorites: Function;
  removeFromFavorites: Function;
}) => {
  return (
    <section className="sectionContainer">
      <FavoriteTeachersList
        isLoggedIn={isLoggedIn}
        favoriteTeachers={favoriteTeachers}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
    </section>
  );
};

export default FavoriteTeachersView;
