import React, { useEffect } from "react";
import TeachersView from "../views/TeachersView";

const Teachers = ({
  favoriteTeachers,
  addToFavorites,
  removeFromFavorites,
  changeColor,
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
  changeColor: Function;
}) => {
  useEffect(() => {
    changeColor("#f8f8f8");
  }, [changeColor]);

  return (
    <TeachersView
      favoriteTeachers={favoriteTeachers}
      addToFavorites={addToFavorites}
      removeFromFavorites={removeFromFavorites}
    />
  );
};

export default Teachers;
