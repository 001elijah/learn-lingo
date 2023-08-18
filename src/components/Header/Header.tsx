import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { SIDEBAR_DATA } from "../../utils/constants";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import NavbarAuth from "../NavbarAuth/NavbarAuth";
import s from "./Header.module.scss";

const Header = ({ changeColor }: { changeColor: Function }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <>
      <header className={s.header}>
        {!isMobile && (
          <div className="headerContainer">
            <div className={s.headerFlexWrapper}>
              <Logo changeColor={changeColor} />
              <nav>
                <ul className={s.topNavbar}>
                  {SIDEBAR_DATA.map(({ path, title }) => (
                    <li key={path}>
                      {title === "Home" ?
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
                          onClick={() => changeColor('#fff')}
                        >
                          {title}
                        </NavLink>
                        : 
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
                          onClick={() => changeColor('#f8f8f8')}
                        >
                          {title}
                        </NavLink>}
                    </li>
                  ))}
                </ul>
              </nav>
              <NavbarAuth
                navbarAuth={s.navbarAuth}
                navbarLogin={s.navbarLogin}
                navbarRegister={s.navbarRegister}
              />
            </div>
          </div>
        )}
        {isMobile && (
          <div className="headerContainer">
            <div className={s.headerFlexWrapper}>
              <Logo changeColor={changeColor} />
              <Navbar changeColor={changeColor} />
            </div>
          </div>
        )}
      </header>
      <Outlet />
    </>
  );
};

export default Header;
