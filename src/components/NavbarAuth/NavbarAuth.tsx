import React from "react";
import LoginIcon from "../../assets/icons/login.svg";

type Props = {
  navbarAuth: string;
  navbarLogin: string;
  navbarRegister: string;
};

const NavbarAuth = ({ navbarAuth, navbarLogin, navbarRegister }: Props) => {
  return (
    <ul className={navbarAuth}>
      <li className={navbarLogin}>
        <button type="button">
          <img src={LoginIcon} alt="Login Icon" />
          Login
        </button>
      </li>
      <li className={navbarRegister}>
        <button type="button">Registration</button>
      </li>
    </ul>
  );
};

export default NavbarAuth;
