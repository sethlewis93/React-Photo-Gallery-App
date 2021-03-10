import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/coffee">Coffee</NavLink>
        </li>
        <li>
          <NavLink to="/computers">Computers</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
