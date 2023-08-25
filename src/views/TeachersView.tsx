import React from "react";
import TeachersList from "../components/TeachersList/TeachersList";

const TeachersView = ({
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
      <TeachersList
        favoriteTeachers={favoriteTeachers}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
    </section>
  );
};

export default TeachersView;
