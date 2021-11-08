import React from "react";

const goals = [
  {
    value: "Task Management",
    color: "#6D9773",
  },
  {
    value: "Project Goals",
    color: "#FFBA00",
  },
  {
    value: "Pripritise tasks",
    color: "#6D9773",
  },
  {
    value: "Reports",
    color: "#FFBA00",
  },
];

const Goals = () => {
  return (
    <div className="info-container">
      <div className="title">App Goals</div>
      <div className="info-wrapper">
        {goals.map((g) => (
          <div className="Card" style={{ backgroundColor: `${g.color}` }}>
            {g.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
