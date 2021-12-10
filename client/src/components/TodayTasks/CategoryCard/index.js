import React from "react";
import { Image } from "semantic-ui-react";

import TaskDetail from "../../common/TaskDetail";
import "./CategoryCard.css";
import Auth from "../../../utils/auth";

const MockData = ({ tasks, setCurrentId }) => {
  const mock = tasks.filter((t) => t.owner === "mock");
  return mock.map((task) => (
    <TaskDetail
      task={task}
      setCurrentId={setCurrentId}
      mock="true"
      today="true"
    />
  ));
};

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
      {Auth.loggedIn() ? (
        tasks.map((task) => (
          <div className="task-container">
            {isToday(task.date) ? (
              <TaskDetail
                task={task}
                setCurrentId={setCurrentId}
                today="true"
              />
            ) : null}
          </div>
        ))
      ) : (
        <MockData tasks={tasks} setCurrentId={setCurrentId} />
      )}
    </div>
  );
};

export default CategoryCard;
