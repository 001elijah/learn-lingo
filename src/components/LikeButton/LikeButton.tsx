import React from "react";
// import PropTypes from "prop-types";
import s from "./LikeButton.module.scss";

const LikeButton = ({
  handleClick,
  id,
  icon,
  alt,
}: {
  handleClick: Function;
  id: string;
  icon?: string;
  alt?: string;
}) => {
  return (
    <button type="button" onClick={() => handleClick(id)} className={s.liked}>
      <img src={icon} alt={alt} />
    </button>
  );
};

// LikeButton.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   id: PropTypes.number.isRequired,
//   icon: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

export default LikeButton;
