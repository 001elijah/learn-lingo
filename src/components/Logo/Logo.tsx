import React from "react";
import s from "./Logo.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";

const Logo = ({ changeColor }: { changeColor: Function }) => {
  return (
    <Link
      to="/"
      className={clsx(s.caption, s.logo)}
      onClick={() => changeColor("#fff")}
    >
      <div className={s.graphics}></div>
      LearnLingo
    </Link>
  );
};

export default Logo;
