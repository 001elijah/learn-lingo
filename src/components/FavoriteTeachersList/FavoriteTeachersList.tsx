import React from "react";
import clsx from "clsx";
import TeacherCard from "../TeacherCard/TeacherCard";
import s from "./FavoriteTeachersList.module.scss";
import { Teacher } from "../../utils/types";

const FavoriteTeachersList = ({
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
              isLoggedIn={isLoggedIn}
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
