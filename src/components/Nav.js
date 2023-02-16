import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { getItemFromLocalStorage, useAuth } from "../hooks/useAuth";

import "./nav.css";

const Nav = () => {
  const user = getItemFromLocalStorage("user");
  const { logout } = useAuth();

  const handleLogout = async (event) => {
    event.preventDefault();
    logout();
  };

  const guestLinks = (
    <Fragment>
      <NavLink className="nav-item nav-link ml-auto" to="/login">
        Login <span className="sr-only">(current)</span>
      </NavLink>
      <NavLink className="nav-item nav-link" to="/register">
        Register
      </NavLink>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <span className="nav-text ml-auto p-1">Logged in as </span>
      {user && <span className="theme-color font-italic">{user.username}</span>}
      <span
        role="button"
        className="nav-item nav-link pe-auto"
        onClick={handleLogout}
      >
        Logout
      </span>
    </Fragment>
  );

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
          <NavLink className="nav-item nav-link" to="/home">
            Home <span className="sr-only">(current)</span>
          </NavLink>

          <NavLink className="nav-item nav-link" to="/vaccines">
            Vaccines
          </NavLink>

          <NavLink className="nav-item nav-link" to="/patients">
            Patients
          </NavLink>
          {user.username ? authLinks : guestLinks}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
