import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import "../common/Styles/commonStyles.css";
import "./Today.css";
import { categoriesOptions } from "../common/Data";
import Form from "../common/Form";
import TaskCard from "./TaskCard";
import { GET_TASKS } from "../../utils/query";

const Today = () => {
  const { loading, error, data } = useQuery(GET_TASKS);
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>There was an error</div>;

  const [currentId, setCurrentId] = useState(null);

  const getTasks = (category, allTasks) => {
    const tasks = allTasks.filter((task) => {
      return task.category === category.value;
    });
    return (
      <TaskCard category={category} tasks={tasks} setCurrentId={setCurrentId} />
    );
  };

  return (
    <div className="container">
      <div className="wrapper">
        <Form setCurrentId={setCurrentId} currentId={currentId} />
      </div>
      <div className="tasks-container">
        {data &&
          categoriesOptions.map((category) => getTasks(category, data.tasks))}
      </div>
    </div>
  );
};

export default Today;
