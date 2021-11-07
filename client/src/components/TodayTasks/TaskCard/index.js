import React from "react";
import { Image } from "semantic-ui-react";
import { priorityOptions } from "../../common/Data";
import "./TaskCard.css";
const TaskDetail = ({ priority, task }) => {
  const color = priorityOptions.find((p) => {
    return p.value === task.priorityLevel;
  });
  return (
    <div className="task-detail" style={{ backgroundColor: `${color.color}` }}>
      {task.name}
    </div>
  );
};
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
          <TaskDetail priority={task.priorityLevel} task={task} />
        </div>
      ))}
    </div>
  );
};

export default index;
