import React from "react";
import { Image } from "semantic-ui-react";

import TaskDetail from "../../common/TaskDetail";
import "./CategoryCard.css";

const CategoryCard = ({ category, tasks, setCurrentId }) => {
  const isToday = (date) => {
    let dateString = new Date(date);
    return dateString.getDate() === new Date().getDate();
  };
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
          {isToday(task.date) ? (
            <TaskDetail task={task} setCurrentId={setCurrentId} today="true" />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
