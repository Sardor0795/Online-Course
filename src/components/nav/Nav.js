import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";
const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav__menu">
        <NavLink activeclassname="active" to="/">
          <i className="fas fa-home"></i>
          Bosh saxifa
        </NavLink>
      </ul>
      <ul className="nav__menu">
        <NavLink activeclassname="active" to="/courses">
          <i className="far fa-compass"></i>
          Kurslar
        </NavLink>
      </ul>
      <ul className="nav__menu">
        <NavLink activeclassname="active" to="/mycourses">
          <i className="fas fa-chalkboard-teacher"></i>
          Mening kurslarim
        </NavLink>
      </ul>
      <ul className="nav__menu">
        <NavLink activeclassname="active" to="/test">
          <i className="fas fa-brain"></i>
          Test
        </NavLink>
      </ul>
      <ul className="nav__menu">
        <NavLink activeclassname="active" to="/settings">
          <i className="fas fa-cog spinner"></i>
          Sozlamalar
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
