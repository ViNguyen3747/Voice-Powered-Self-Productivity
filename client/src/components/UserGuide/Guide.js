import React from "react";

const userGuide = [
  {
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    color: "#6D9773",
  },
  {
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    color: "#FFBA00",
  },
  {
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    color: "#6D9773",
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
          </div>
        ))}
      </div>
    </div>
  );
};
