import React from "react";
import s from "./LoadMoreButton.module.scss";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  handleLoadMore: Function;
}

const LoadMoreButton = ({ handleLoadMore }: Props) => {
  return (
    <button
      type="button"
      className={s.loadMoreButton}
      onClick={() => handleLoadMore()}
    >
      Load more
    </button>
  );
};

export default LoadMoreButton;
