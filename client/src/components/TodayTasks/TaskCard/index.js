import React from "react";
import { Image } from "semantic-ui-react";
import { priorityOptions } from "../../common/Data";
import "./TaskCard.css";
const index = ({ category, tasks }) => {
  console.log(tasks);
  return (
    <div className="card-container">
      <h2>{category.value}</h2>
      <Image
        src={category.illustration}
        size="small"
        centered
        alt={category.value}
      />
      {tasks.map((task) => (
        <div className="task-container">
          <h3>{task.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default index;
