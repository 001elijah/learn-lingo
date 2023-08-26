import React from "react";
import s from "./TeachersList.module.scss";

import TeacherCard from "../TeacherCard/TeacherCard";
import { Teacher } from "../../utils/types";

const TeachersList = ({
  isLoggedIn,
  teachers,
  favoriteTeachers,
  addToFavorites,
  removeFromFavorites,
}: {
  isLoggedIn: boolean;
  teachers: Teacher[];
  favoriteTeachers: Teacher[];
  addToFavorites: Function;
  removeFromFavorites: Function;
}) => {
  return (
    <>
      <h1 className={s.title}>Teachers</h1>
      <ul className={s.teachersList}>
        {teachers.map((teacher, index) => (
          <TeacherCard
            key={index}
            isLoggedIn={isLoggedIn}
            favoriteTeachers={favoriteTeachers}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            teacherInfo={teacher}
          />
        ))}
      </ul>
    </>
  );
};

export default TeachersList;
