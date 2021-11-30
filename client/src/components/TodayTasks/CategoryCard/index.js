import React from "react";
import { Image } from "semantic-ui-react";

import TaskDetail from "../../common/TaskDetail";
import "./CategoryCard.css";

const CategoryCard = ({ category, tasks, setCurrentId }) => {
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
          <TaskDetail task={task} setCurrentId={setCurrentId} today="true" />
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
