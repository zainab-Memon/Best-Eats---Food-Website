import React from "react";
import card1 from "../assets/card1.avif";
import card2 from "../assets/card2.avif";
import card3 from "../assets/card3.avif";

const data = [
  {
    id: 1,
    image: card1,
    title: "Sun's Out, BOGO's Out",
    tagline: "Through 8/26",
  },
  {
    id: 2,
    image: card2,
    title: "New Restaurants",
    tagline: "Added Daily",
  },
  {
    id: 3,
    image: card3,
    title: "We Deliver Desserts Too",
    tagline: "Tasty Treats",
  },
];

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {data.map(({ id, image, title, tagline }) => {
        return (
          <div className=" card rounded-xl relative" key={id}>
            {/* overlay */}
            <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white ">
              <p className="font-bold text-2xl px-2 pt-4">{title}</p>
              <p className="px-2">{tagline}</p>
              <button className="border-white bg-white text-black mx-2 absolute bottom-4">
                Order Now
              </button>
            </div>
            <img
              src={image}
              alt=""
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            />
          </div>
        );
      })}
    </div>
  );
};

export default HeadlineCards;
