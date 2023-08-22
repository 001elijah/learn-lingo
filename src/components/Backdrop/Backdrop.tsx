import React from "react";
import s from "./Backdrop.module.scss";

const Backdrop = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Function;
}) => {
  return isModalOpen ? (
    <div className={s.backdrop} onClick={() => setIsModalOpen()}></div>
  ) : null;
};

export default Backdrop;
