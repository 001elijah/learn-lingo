import React from "react";
import s from "./TeachersList.module.scss";
import { teachers } from "../../services/teachers";
import TeacherCard from "../TeacherCard/TeacherCard";

const TeachersList = ({
  favoriteTeachers,
  addToFavorites,
  removeFromFavorites,
}: {
  favoriteTeachers: [{}];
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
