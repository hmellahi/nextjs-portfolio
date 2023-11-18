import React from "react";
import { NavLink } from "react-router-dom";

export default function CustomNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive}) =>
        `border-2 border-white px-2 py-2 rounded-md shadow-lg text-sm md:text-lg ${
          window.location.pathname !== "/" && "text-blue-500 "
        } ${
          !isActive ? "text-white border-blue-500" : "text-blue-500 bg-white"
        }`
      }
    >
      {children}
    </NavLink>
  );
}
