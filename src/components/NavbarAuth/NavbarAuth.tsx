import React, { useState } from "react";
import LoginIcon from "../../assets/icons/login.svg";
import LoginModal from "../LoginModal/LoginModal";
import ModalPortal from "../ModalPortal/ModalPortal";

type Props = {
  toggleSidebar?: Function;
  navbarAuth: string;
  navbarLogin: string;
  navbarRegister: string;
};

const NavbarAuth = ({
  toggleSidebar,
  navbarAuth,
  navbarLogin,
  navbarRegister,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = async () => {
    toggleSidebar && (await toggleSidebar());
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
        <LoginModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </ModalPortal>
    </>
  );
};

export default NavbarAuth;
