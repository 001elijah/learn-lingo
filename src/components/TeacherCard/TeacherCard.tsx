import React, { useEffect, useState } from "react";
import LikeButton from "../LikeButton/LikeButton";
import Like from "../../assets/icons/like.svg";
import Liked from "../../assets/icons/liked.svg";
import s from "./TeacherCard.module.scss";
import ModalPortal from "../ModalPortal/ModalPortal";
import BookTrialModal from "../BookTrialModal/BookTrialModal";
import { Teacher } from "../../utils/types";
import LoginModal from "../LoginModal/LoginModal";

const TeacherCard = ({
  isLoggedIn,
  favoriteTeachers,
  addToFavorites,
  removeFromFavorites,
  teacherInfo,
}: {
  isLoggedIn: boolean;
  favoriteTeachers: Teacher[];
  addToFavorites: Function;
  removeFromFavorites: Function;
  teacherInfo: Teacher;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isBookTrialModal, setIsBookTrialModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  }

  const handleOpenModal = async () => {
    setIsLoginModal(false);
    await setIsBookTrialModal(true);
    setIsModalOpen(true);
  };

  const handleToggleLiked = async (id: string) => {
    if (isLoggedIn) {
      if (!isLiked) {
        addToFavorites(id);
      } else {
        removeFromFavorites(id);
      }
    } else {
      setIsBookTrialModal(false);
      await setIsLoginModal(true);
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    if (favoriteTeachers?.length) {
      setIsLiked(
        favoriteTeachers?.find((teacher) => teacher.id === teacherInfo.id)
          ? true
          : false,
      );
    } else {
      setIsLiked(false);
    }
  }, [favoriteTeachers, teacherInfo.id]);
  return (
    <>
      <li className={s.teacherCard}>
        <div>
          <div className={s.roundImageBorder}>
            <img
              className={s.teacherPhoto}
              src={teacherInfo.avatar_url}
              alt="teacher"
            />
          </div>
        </div>
        <div>
          {isLiked ? (
            <LikeButton
              icon={Liked}
              alt={"liked"}
              id={teacherInfo.id}
              handleClick={handleToggleLiked}
            />
          ) : (
            <LikeButton
              icon={Like}
              alt={"like"}
              id={teacherInfo.id}
              handleClick={handleToggleLiked}
            />
          )}
          <ul className={s.teacherCommonInfo}>
            <li>
              <span className={s.languages}>Languages</span>
            </li>
            <li>
              <span className={s.lessonsOnline}>Lessons online</span>
            </li>
            <li>
              <span className={s.lessonsDone}>
                Lessons done: {teacherInfo.lessons_done}
              </span>
            </li>
            <li>
              <span className={s.rating}>Rating: {teacherInfo.rating}</span>
            </li>
            <li>
              <span className={s.price}>
                Price / 1 hour:{" "}
                <span className={s.priceHighlight}>
                  {teacherInfo.price_per_hour}$
                </span>
              </span>
            </li>
          </ul>
          <h2 className={s.teacherName}>
            {teacherInfo.name} {teacherInfo.surname}
          </h2>
          <ul className={s.furtherInfoList}>
            <li>
              <span className={s.furtherInfo}>
                Speaks:{" "}
                <span className={s.blackUnderlined}>
                  {teacherInfo.languages.join(", ")}
                </span>
              </span>
            </li>
            <li>
              <span className={s.furtherInfo}>
                Lesson info:{" "}
                <span className={s.black}>{teacherInfo.lesson_info}</span>
              </span>
            </li>
            <li>
              <span className={s.furtherInfo}>
                Conditions:{" "}
                <span className={s.black}>{teacherInfo.conditions}</span>
              </span>
            </li>
          </ul>
          {showMore && 
          <>
            <p className={s.paragraphLineHeight}>{teacherInfo.experience}</p>
            <ul className={s.reviewInstances}>
              {teacherInfo.reviews.map((review, index) => (
                <li key={index}>
                  <div className={s.reviewerData}>
                    <div className={s.reviewerAvatar}>
                      <img
                        className={s.reviewerPhoto}
                        src={review.reviewer_avatar_url}
                        alt={review.reviewer_name}
                      />
                    </div>
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
            </>}
          {!showMore && <button className={s.readMoreBtn} type="button" onClick={handleToggleShowMore}>Read more</button>}
          <ul className={s.levels}>
            {teacherInfo.levels.map((level, index) => (
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
        {isBookTrialModal && (
          <BookTrialModal
            teacherName={teacherInfo.name + " " + teacherInfo.surname}
            teacherPhoto={teacherInfo.avatar_url}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        {isLoginModal && (
          <LoginModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </ModalPortal>
    </>
  );
};

export default TeacherCard;
