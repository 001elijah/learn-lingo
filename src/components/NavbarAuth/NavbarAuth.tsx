import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginIcon from "../../assets/icons/login.svg";
import LoginModal from "../LoginModal/LoginModal";
import ModalPortal from "../ModalPortal/ModalPortal";
import RegistrationModal from "../RegistrationModal/RegistrationModal";
import { logoutAPI } from "../../services/firebaseAPI";

type Props = {
  isLoggedIn: boolean;
  toggleSidebar?: Function;
  navbarAuth: string;
  navbarLogin: string;
  navbarLogout: string;
  navbarRegister: string;
};

const NavbarAuth = ({
  isLoggedIn,
  toggleSidebar,
  navbarAuth,
  navbarLogin,
  navbarLogout,
  navbarRegister,
}: Props) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isRegistrationModal, setIsRegistrationModal] = useState(false);

  const handleOpenModal = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLElement;

    if (button.innerText === "Login") {
      setIsRegistrationModal(false);
      await setIsLoginModal(true);
    } else {
      setIsLoginModal(false);
      await setIsRegistrationModal(true);
    }

    toggleSidebar && (await toggleSidebar());
    setIsModalOpen(!isModalOpen);
  };

  const handleLogout = () => {
    logoutAPI();
    // localStorage.setItem("favoriteTeachers", JSON.stringify([]));
    navigate("/");
  };

  return (
    <>
      {isLoggedIn ? (
        <button className={navbarLogout} type="button" onClick={handleLogout}>
          <img src={LoginIcon} alt="Login Icon" />
          Log Out
        </button>
      ) : (
        <>
          <ul className={navbarAuth}>
            <li className={navbarLogin}>
              <button type="button" onClick={(e) => handleOpenModal(e)}>
                <img src={LoginIcon} alt="Login Icon" />
                Login
              </button>
            </li>
            <li className={navbarRegister}>
              <button type="button" onClick={(e) => handleOpenModal(e)}>
                Registration
              </button>
            </li>
          </ul>
          <ModalPortal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          >
            {isLoginModal && (
              <LoginModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            )}
            {isRegistrationModal && (
              <RegistrationModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            )}
          </ModalPortal>
        </>
      )}
    </>
  );
};

export default NavbarAuth;
