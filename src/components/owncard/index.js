import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const OwnCard = ({ card }) => {
  const { title, text, link, img, lessons, learned } = card;
  return (
    <div className="owncard">
      <div
        className="owncard__image"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="owncard__info">
        <Link to={link} className="owncard__title">
          {title}
        </Link>
        <div className="owncard__text">{text}</div>
        <div className="owncard__row">
          <div className="owncard__status">
            <div className="owncard__count">
              {learned}/{lessons} Darslar
            </div>
            <div className="owncard__progress">
              <div
                className="owncard__line"
                style={{ width: `${Math.round((learned / lessons) * 100)}%` }}
              ></div>
            </div>
          </div>
          <Link to={link} className="link">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OwnCard;
