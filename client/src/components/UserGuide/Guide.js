import React from "react";
import  "../common/Styles/commonStyles.css"
import image from "../images/categories/emotional.svg"

const userGuide = [
  {
    value:
    "To use the App you must register for an acount by filling up the join us page wich can be accessed by clicking the join us link bellow or by Sing in if you already have an account",
    image: image,
    color: "#6D9773",
  },
  {
    value:
      "To ",
      image: image ,
    color: "#FFBA00",
  },
  {
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    color: "#6D9773",
    image: image,
  },
];
export const Guide = () => {
  return (
    <div className="guide-container" style={{ backgroundColor: "#304B30" }}>
      <div className="title" style={{ color: "white" }}>
        User Guides
      </div>
      <div className="info-wrapper">
        {userGuide.map((g) => (
          <div
            className="guideCard"
            style={{
              backgroundColor: `${g.color}`,
              textAlign: "left",
            }}
          >
            <div>
             {g.value}
            </div>
            <div>
            <img src={g.image} alt=''/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
