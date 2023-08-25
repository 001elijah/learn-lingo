import React from "react";
import FavoriteTeachersList from "../components/FavoriteTeachersList/FavoriteTeachersList";

const FavoriteTeachersView = ({
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
    <section className="sectionContainer">
      <FavoriteTeachersList
        favoriteTeachers={favoriteTeachers}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
    </section>
  );
};

export default FavoriteTeachersView;
