import React from "react";
import s from "./Logo.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";

const Logo = () => {
  return (
    <Link to="/" className={clsx(s.caption, s.logo)}>
      <div className={s.graphics}></div>
      LearnLingo
    </Link>
  );
};

export default Logo;
