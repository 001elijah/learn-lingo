import React from "react";
import TeachersList from "../components/TeachersList/TeachersList";
import { Teacher } from "../utils/types";

const TeachersView = ({
  endOfCollection,
  handleLoadMore,
  isLoggedIn,
  teachers,
  favoriteTeachers,
  addToFavorites,
  removeFromFavorites,
}: {
  endOfCollection: boolean;
  handleLoadMore: Function;
  isLoggedIn: boolean;
  teachers: Teacher[];
  favoriteTeachers: Teacher[];
  addToFavorites: Function;
  removeFromFavorites: Function;
}) => {
  return (
    <section className="sectionContainer">
      <TeachersList
        endOfCollection={endOfCollection}
        handleLoadMore={handleLoadMore}
        isLoggedIn={isLoggedIn}
        teachers={teachers}
        favoriteTeachers={favoriteTeachers}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
    </section>
  );
};

export default TeachersView;
