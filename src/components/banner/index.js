import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Banner = ({ banner }) => {
  const { title, text, buttonText, buttonTo, bg } = banner;
  return (
    <div className="banner" style={{ backgroundImage: `url(${bg})` }}>
      <div className="banner__title">{title}</div>
      <div className="banner__text">{text}</div>
      <NavLink className="link" to={buttonTo}>
        {buttonText}
      </NavLink>
    </div>
  );
};

export default Banner;
