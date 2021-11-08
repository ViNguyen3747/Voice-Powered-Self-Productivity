import React from "react";

import "../common/Styles/commonStyles.css";
import "./Today.css";
import { categoriesOptions } from "../common/Data";
import Form from "../common/Form";
import TaskCard from "./TaskCard";

const Today = ({ tasks }) => {
  const getTasks = (category, allTasks) => {
    const tasks = allTasks.filter((task) => {
      return task.category === category.value;
    });
    return <TaskCard category={category} tasks={tasks} />;
  };

  return (
    <div className="container">
      <div className="wrapper">
        <Form />
      </div>
      <div className="tasks-container">
        {tasks &&
          categoriesOptions.map((category) => getTasks(category, tasks.tasks))}
      </div>
    </div>
  );
};

export default Today;
