import React from "react";
import s from "./Backdrop.module.scss";

type Props = { isModalOpen: boolean; setIsModalOpen: Function };

const Backdrop = ({ isModalOpen, setIsModalOpen }: Props) => {
  return isModalOpen ? (
    <div className={s.backdrop} onClick={() => setIsModalOpen()}></div>
  ) : null;
};

export default Backdrop;
