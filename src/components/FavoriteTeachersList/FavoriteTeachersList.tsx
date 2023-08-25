import React from "react";
import clsx from "clsx";
import TeacherCard from "../TeacherCard/TeacherCard";
import s from "./FavoriteTeachersList.module.scss";

const FavoriteTeachersList = ({
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
      <h1 className={s.title}>Favorite Teachers</h1>
      <h2 className={clsx(s.title, favoriteTeachers.length === 0 && s.visible)}>
        Here is your Favorite Teachers list, but it is probably empty yet...
      </h2>
      {favoriteTeachers.length > 0 && (
        <ul className={s.teachersList}>
          {favoriteTeachers.map((teacher, index) => (
            <TeacherCard
              key={index}
              favoriteTeachers={favoriteTeachers}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
              teacherInfo={teacher}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default FavoriteTeachersList;
