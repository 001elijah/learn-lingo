import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SIDEBAR_DATA } from "../../utils/constants";
import NavbarAuth from "../NavbarAuth/NavbarAuth";
import s from "./Navbar.module.scss";

const Navbar = ({ changeColor }: { changeColor: Function }) => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);
  useEffect(() => {
    if (sidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [sidebar]);
  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        {!sidebar && (
          <div>
            <Link to="#" className={s.menuControls}>
              <FaIcons.FaBars
                className={s.burgerIcon}
                onClick={toggleSidebar}
              />
            </Link>
          </div>
        )}
        <nav className={sidebar ? clsx(s.sidebar, s.active) : s.sidebar}>
          <ul>
            <li className={s.navbarTop}>
              <Link to="#" className={s.menuControls}>
                <AiIcons.AiOutlineClose
                  className={s.closeIcon}
                  onClick={toggleSidebar}
                />
              </Link>
            </li>
            {SIDEBAR_DATA.map((item, index) => {
              return (
                <li key={index} className={s.navText}>
                  {item.title === "Home" ? (
                    <NavLink
                      to={item.path}
                      onClick={() => {
                        toggleSidebar();
                        changeColor("#fff");
                      }}
                      className={({ isActive }) => (isActive ? s.isActive : "")}
                    >
                      {item.icons}
                      <span>{item.title}</span>
                    </NavLink>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => {
                        toggleSidebar();
                        changeColor("#f8f8f8");
                      }}
                      className={({ isActive }) => (isActive ? s.isActive : "")}
                    >
                      {item.icons}
                      <span>{item.title}</span>
                    </NavLink>
                  )}
                </li>
              );
            })}
          </ul>
          <NavbarAuth
            navbarAuth={s.navbarAuth}
            navbarLogin={s.navbarLogin}
            navbarRegister={s.navbarRegister}
          />
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
