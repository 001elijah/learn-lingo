import React from "react";
import s from "./LikeButton.module.scss";

type Props = {
  handleClick: Function;
  id: string;
  icon?: string;
  alt?: string;
};

const LikeButton = ({ handleClick, id, icon, alt }: Props) => {
  return (
    <button type="button" onClick={() => handleClick(id)} className={s.liked}>
      <img src={icon} alt={alt} />
    </button>
  );
};

export default LikeButton;
