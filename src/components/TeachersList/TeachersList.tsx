import React from "react";
import s from "./TeachersList.module.scss";
import { teachers } from "../../services/teachers";
import TeacherCard from "../TeacherCard/TeacherCard";

const TeachersList = ({
  favoriteTeachers,
  addToFavorites,
  removeFromFavorites,
}: {
  favoriteTeachers: {
    id: string;
    avatar_url: string;
    lessons_done: number;
    rating: number;
    price_per_hour: number;
    name: string;
    surname: string;
    languages: string[];
    lesson_info: string;
    conditions: string[];
    experience: string;
    reviews: any[];
    levels: string[];
  }[];
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
