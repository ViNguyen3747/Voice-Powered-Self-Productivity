import React from "react";
import  "../common/Styles/commonStyles.css"

const userGuide = [
  {
    value:
    "To use the App you must register for an acount by filling up the join us page wich can be accessed by clicking the join us link bellow or by Sing in if you already have an account",
    image: "./images/categories/emotional.svg",
    color: "#6D9773",
  },
  {
    value:
      "To ",
      image: "./images/categories/emotional.svg",
    color: "#FFBA00",
  },
  {
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    color: "#6D9773",
    image: "./images/categories/emotional.svg",
  },
];
export const Guide = () => {
  return (
    <div className="info-container" style={{ backgroundColor: "#304B30" }}>
      <div className="title" style={{ color: "white" }}>
        User Guides
      </div>
      <div className="info-wrapper">
        {userGuide.map((g) => (
          <div
            className="Card"
            style={{
              backgroundColor: `${g.color}`,
              textAlign: "left",
            }}
          >
            {g.value}
            <img src={g.image} alt=''/>
          </div>
        ))}
      </div>
    </div>
  );
};
