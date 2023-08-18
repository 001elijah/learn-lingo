import React from "react";
import s from "./TeachersList.module.scss";
import { teachers } from "../../services/teachers";
import LikeButton from "../LikeButton/LikeButton";
import Like from "../../assets/icons/like.svg";
import Liked from "../../assets/icons/liked.svg";

const TeachersList = () => {
  return (
    <ul className={s.teachersList}>
      {teachers.map((teacher, index) => (
        <li key={index} className={s.teacherCard}>
          <div>
            <div className={s.roundImageBorder}>
              <img
                className={s.teacherPhoto}
                src={teacher.avatar_url}
                alt="teacher"
              />
            </div>
          </div>
          <div>
            <LikeButton icon={Like} alt={"like"} />
            <ul className={s.teacherCommonInfo}>
              <li>
                <span className={s.languages}>Languages</span>
              </li>
              <li>
                <span className={s.lessonsOnline}>Lessons online</span>
              </li>
              <li>
                <span className={s.lessonsDone}>
                  Lessons done: {teacher.lessons_done}
                </span>
              </li>
              <li>
                <span className={s.rating}>Rating: {teacher.rating}</span>
              </li>
              <li>
                <span className={s.price}>
                  Price / 1 hour:{" "}
                  <span className={s.priceHighlight}>
                    {teacher.price_per_hour}$
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TeachersList;
