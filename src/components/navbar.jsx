import React from "react";
import "./navbar.scss";
import logokasa from "../assets/logokasa.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="navbar__logo">
          <img src={logokasa} alt="logokasa" />
        </div>
      </NavLink>
      <NavLink to="/">
        <div>Accueil</div>
      </NavLink>
      <NavLink to="/apropos">
        <div>A propos</div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
