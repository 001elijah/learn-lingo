import React from "react";
import FavoriteTeachersList from "../components/FavoriteTeachersList/FavoriteTeachersList";
import { Teacher } from "../utils/types";

const FavoriteTeachersView = ({
  favoriteTeachers,
  addToFavorites,
  removeFromFavorites,
}: {
  favoriteTeachers: Teacher[];
  addToFavorites: Function;
  removeFromFavorites: Function;
}) => {
  return (
    <section className="sectionContainer">
      <FavoriteTeachersList
        favoriteTeachers={favoriteTeachers}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
    </section>
  );
};

export default FavoriteTeachersView;
