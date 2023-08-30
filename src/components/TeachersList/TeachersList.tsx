import React from "react";
import s from "./TeachersList.module.scss";

import TeacherCard from "../TeacherCard/TeacherCard";
import { Teacher } from "../../utils/types";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

const TeachersList = ({
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
  
  if (teachers.length === 0) {
    return <div className={s.loader}></div>;
  }

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
      {!endOfCollection && <LoadMoreButton handleLoadMore={handleLoadMore} />}
    </>
  );
};

export default TeachersList;
