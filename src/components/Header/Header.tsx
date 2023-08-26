import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
  SIDEBAR_DATA_LOGGED_IN,
  SIDEBAR_DATA_LOGGED_OUT,
} from "../../utils/constants";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import NavbarAuth from "../NavbarAuth/NavbarAuth";
import s from "./Header.module.scss";

const Header = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <>
      <header className={s.header}>
        {!isMobile && (
          <div className="headerContainer">
            <div className={s.headerFlexWrapper}>
              <Logo />
              <nav>
                <ul className={s.topNavbar}>
                  {(isLoggedIn
                    ? SIDEBAR_DATA_LOGGED_IN
                    : SIDEBAR_DATA_LOGGED_OUT
                  ).map(({ path, title }) => (
                    <li key={path}>
                      <NavLink
                        className={s.navItem}
                        style={({ isActive }) =>
                          isActive
                            ? {
                                color: "#ffb700",
                              }
                            : { color: "#2c2c2c" }
                        }
                        to={path}
                      >
                        {title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
              <NavbarAuth
                isLoggedIn={isLoggedIn}
                navbarAuth={s.navbarAuth}
                navbarLogin={s.navbarLogin}
                navbarLogout={s.navbarLogout}
                navbarRegister={s.navbarRegister}
              />
            </div>
          </div>
        )}
        {isMobile && (
          <div className="headerContainer">
            <div className={s.headerFlexWrapper}>
              <Logo />
              <Navbar isLoggedIn={isLoggedIn} />
            </div>
          </div>
        )}
      </header>
      <Outlet />
    </>
  );
};

export default Header;
