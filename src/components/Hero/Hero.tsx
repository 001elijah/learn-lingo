import React from "react";
import s from "./Hero.module.scss";
import HeroPicture from "../HeroPicture/HeroPicture";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/teachers");
  };
  return (
    <div className={s.flexWrapper}>
      <div className={s.hero}>
        <h1 className={s.title}>
          Unlock your potential with the best{" "}
          <span className={s.emphasize}>language</span> tutors
        </h1>
        <p className={s.caption}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <button type="button" className={s.btn} onClick={handleGetStarted}>
          Get started
        </button>
      </div>
      <HeroPicture />
    </div>
  );
};

export default Hero;
