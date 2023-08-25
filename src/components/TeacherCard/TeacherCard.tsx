import React, { useState } from "react";
import LikeButton from "../LikeButton/LikeButton";
import Like from "../../assets/icons/like.svg";
// import Liked from "../../assets/icons/liked.svg";
import s from "./TeacherCard.module.scss";
import ModalPortal from "../ModalPortal/ModalPortal";
import BookTrialModal from "../BookTrialModal/BookTrialModal";

const TeacherCard = ({
  teacher,
}: {
  teacher: {
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
    reviews: {
      reviewer_name: string;
      reviewer_rating: number;
      comment: string;
    }[];
    levels: string[];
  };
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <li className={s.teacherCard}>
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
          <h2 className={s.teacherName}>
            {teacher.name} {teacher.surname}
          </h2>
          <ul className={s.furtherInfoList}>
            <li>
              <span className={s.furtherInfo}>
                Speaks:{" "}
                <span className={s.blackUnderlined}>
                  {teacher.languages.join(", ")}
                </span>
              </span>
            </li>
            <li>
              <span className={s.furtherInfo}>
                Lesson info:{" "}
                <span className={s.black}>{teacher.lesson_info}</span>
              </span>
            </li>
            <li>
              <span className={s.furtherInfo}>
                Conditions:{" "}
                <span className={s.black}>{teacher.conditions}</span>
              </span>
            </li>
          </ul>
          <p className={s.paragraphLineHeight}>{teacher.experience}</p>
          <ul className={s.reviewInstances}>
            {teacher.reviews.map((review, index) => (
              <li key={index}>
                <div className={s.reviewerData}>
                  <div className={s.reviewerAvatar}></div>
                  <div className={s.reviewerNameAndRating}>
                    <span className={s.colorGrey}>{review.reviewer_name}</span>
                    <span className={s.ratingWithStar}>
                      {(Math.round(review.reviewer_rating * 10) / 10).toFixed(
                        1,
                      )}
                    </span>
                  </div>
                </div>
                <p>{review.comment}</p>
              </li>
            ))}
          </ul>
          <ul className={s.levels}>
            {teacher.levels.map((level, index) => (
              <li key={index} className={s.level}>
                #{level}
              </li>
            ))}
          </ul>
          <button type="button" className={s.btn} onClick={handleOpenModal}>
            Book trial lesson
          </button>
        </div>
      </li>
      <ModalPortal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <BookTrialModal
          teacherName={teacher.name + " " + teacher.surname}
          teacherPhoto={teacher.avatar_url}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </ModalPortal>
    </>
  );
};

export default TeacherCard;
