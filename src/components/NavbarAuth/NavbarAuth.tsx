import React, { useState } from "react";
import LoginIcon from "../../assets/icons/login.svg";
import Modal from "../LoginModal/LoginModal";
import ModalPortal from "../ModalPortal/ModalPortal";

type Props = {
  navbarAuth: string;
  navbarLogin: string;
  navbarRegister: string;
};

const NavbarAuth = ({ navbarAuth, navbarLogin, navbarRegister }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <ul className={navbarAuth}>
        <li className={navbarLogin}>
          <button type="button" onClick={handleOpenModal}>
            <img src={LoginIcon} alt="Login Icon" />
            Login
          </button>
        </li>
        <li className={navbarRegister}>
          <button type="button" onClick={handleOpenModal}>
            Registration
          </button>
        </li>
      </ul>
      <ModalPortal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </ModalPortal>
    </>
  );
};

export default NavbarAuth;
