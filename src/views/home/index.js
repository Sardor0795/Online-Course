import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/banner";
import OwnCard from "../../components/owncard";
import Progress from "../../components/progress";
import SellCard from "../../components/sellcard";

const Home = () => {
  const banner = {
    title: "Success is a habit",
    text: "Build your learning routine in 5F Courses.",
    buttonTo: "/course/frontend",
    buttonText: "Batafsil",
    bg: "https://images.unsplash.com/photo-1626968361222-291e74711449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  };

  const myCards = [
    {
      title: "Flutter development",
      text: "20. Object-oriented Programming on Dart",
      link: "/flutter/20",
      img: "https://yt3.ggpht.com/ytc/AKedOLRt1d4p7bPylasq_66BIC8-k3hkyVjJ2JICQITK=s900-c-k-c0x00ffffff-no-rj",
      lessons: 40,
      learned: 30,
    },
    {
      title: "Flutter development",
      text: "20. Object-oriented Programming on Dart",
      link: "/flutter/20",
      img: "https://yt3.ggpht.com/ytc/AKedOLRt1d4p7bPylasq_66BIC8-k3hkyVjJ2JICQITK=s900-c-k-c0x00ffffff-no-rj",
      lessons: 40,
      learned: 15,
    },
  ];

  const recCards = [
    {
      best: true,
      title: "e-Commerce Mobile App design using Figma",
      img: "https://us.123rf.com/450wm/wikagraphic/wikagraphic2011/wikagraphic201130562/159405373-initial-letter-js-logotype-company-name-colored-blue-swoosh-design-concept-vector-logo-for-business-.jpg?ver=6",
      author: {
        name: "Jack Harper",
        img: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png",
      },
      mark: 4.8,
      review: 555,
      price: 15,
      oldprice: 24,
      link: "/js/2",
    },
    {
      best: true,
      title: "e-Commerce Mobile App design using Figma",
      img: "https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1521098258210-W9FBV72SMJJX3LESUA7Z/js.jpg?format=2500w",
      author: {
        name: "Jack Harper",
        img: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png",
      },
      mark: 4.8,
      review: 555,
      price: 250,
      oldprice: 24,
      link: "/js/2",
    },
    {
      best: false,
      title: "e-Commerce Mobile App design using Figma",
      img: "https://us.123rf.com/450wm/wikagraphic/wikagraphic2011/wikagraphic201130562/159405373-initial-letter-js-logotype-company-name-colored-blue-swoosh-design-concept-vector-logo-for-business-.jpg?ver=6",
      author: {
        name: "Jack Harper",
        img: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png",
      },
      mark: 4.8,
      review: 555,
      price: 15,
      oldprice: 24,
      link: "/js/2",
    },
  ];

  return (
    <>
      <Banner banner={banner} />
      <div className="row mb-40">
        <div className="col-8">
          <div className="btitle d-flex justify-content-between align-center">
            Continue learning
            <Link className="more" to="/">
              All
            </Link>
          </div>

          {myCards.map((card, index) => (
            <OwnCard key={`owncars-${index}`} card={card} />
          ))}
        </div>
        <div className="col-4">
          <Progress />
        </div>
      </div>
      <div className="btitle">Tavsiya etamiz</div>
      <div className="row">
        {recCards.map((card, index) => (
          <div className="col-4" key={`reccard-${index}`}>
            <SellCard card={card} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
