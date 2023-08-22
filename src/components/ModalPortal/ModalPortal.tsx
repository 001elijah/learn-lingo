import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Backdrop from "../Backdrop/Backdrop";

const modalRoot: any | null = document.getElementById("modal-root");
const windowRoot: any | null = document.getElementById("window-root");

const ModalPortal = ({
  children,
  isModalOpen,
  setIsModalOpen,
}: {
  children: any;
  isModalOpen: boolean;
  setIsModalOpen: Function;
}) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />,
        modalRoot,
      )}
      {ReactDOM.createPortal(children, windowRoot)}
    </>
  );
};

export default ModalPortal;
