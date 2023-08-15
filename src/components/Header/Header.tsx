import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { href: "/", text: "Home" },
  { href: "teachers", text: "Teachers" },
  { href: "favorites", text: "Favorites" },
];

const Header = () => {
  return (
    <>
      <header>
        <nav>
          {navItems.map(({ href, text }) => (
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#dc2800",
                    }
                  : { color: "#545e6f" }
              }
              to={href}
              key={href}
            >
              {text}
            </NavLink>
          ))}
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
