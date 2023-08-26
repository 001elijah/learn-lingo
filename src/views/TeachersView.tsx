import React from "react";
import TeachersList from "../components/TeachersList/TeachersList";
import { Teacher } from "../utils/types";

const TeachersView = ({
  teachers,
  favoriteTeachers,
  addToFavorites,
  removeFromFavorites,
}: {
  teachers: Teacher[];
  favoriteTeachers: Teacher[];
  addToFavorites: Function;
  removeFromFavorites: Function;
}) => {
  return (
    <section className="sectionContainer">
      <TeachersList
        teachers={teachers}
        favoriteTeachers={favoriteTeachers}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
    </section>
  );
};

export default TeachersView;
