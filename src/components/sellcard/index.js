import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const SellCard = ({ card }) => {
  const { best, img, title, author, mark, review, price, oldprice, link } =
    card;
  return (
    <>
      <div className="sellcard">
        <div
          className="sellcard__img"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div
            className="sellcard__best"
            style={{ display: best ? "block" : "none" }}
          >
            Best seller
          </div>
        </div>
        <Link className="sellcard__title" to={link}>
          {title}
        </Link>
        <div className="sellcard__author">
          <div
            className="sellcard__author__img"
            style={{ backgroundImage: `url(${author.img})` }}
          ></div>
          <div className="sellcard__author__name">{author.name}</div>
        </div>
        <div className="sellcard__grade">
          <i className="fas fa-star"></i>
          <div className="sellcard__mark">
            {mark} ({review} Review)
          </div>
        </div>
        <div className="d-flex align-center">
          <div className="sellcard__price">{price} $</div>
          <div className="sellcard__oldprice">{oldprice} $</div>
          <button className="link">
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default SellCard;
