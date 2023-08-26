import React from "react";
import s from "./TeachersList.module.scss";

import TeacherCard from "../TeacherCard/TeacherCard";
import { Teacher } from "../../utils/types";

const TeachersList = ({
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
    <>
      <h1 className={s.title}>Teachers</h1>
      <ul className={s.teachersList}>
        {teachers.map((teacher, index) => (
          <TeacherCard
            key={index}
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
