import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import "./nav.css";

const NavGuest = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand theme-color">Covid-19 Vaccine Helper</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <div className="navbar-nav container justify-content-start">
          <NavLink className="nav-item nav-link active" to="/home">
            Home <span class="sr-only">(current)</span>
          </NavLink>
          <NavLink className="nav-item nav-link" to="/vaccines">
            Vaccines
          </NavLink>
          <NavLink className="nav-item nav-link" to="/about">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavGuest;
