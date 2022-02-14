import React from "react";
import Banner from "../components/banner";
import Search from "../components/search";
import SellCard from "../components/sellcard";

const Explore = () => {
  const banner = {
    title: "Full-Stack Web Dev",
    text: "Build your learning routine in 5F Courses.",
    buttonTo: "/course/frontend",
    buttonText: "Batafsil",
    bg: "https://images.unsplash.com/photo-1626968361222-291e74711449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  };

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
      <Search
        searching={(search) => {
          console.log(search);
        }}
      />
      <div className="btitle d-flex justify-content-between align-center">
        Kurslar ro'yxati
        <button>
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.6654 0H0.332031V2.66667H21.6654V0ZM2.9987 6.66667H18.9987V9.33333H2.9987V6.66667ZM6.9987 13.3333H14.9987V16H6.9987V13.3333Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
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

export default Explore;
