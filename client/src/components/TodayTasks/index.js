import React from "react";
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
  console.log(data);
  console.log(error);
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
        {data &&
          categoriesOptions.map((category) => getTasks(category, data.tasks))}
      </div>
    </div>
  );
};

export default Today;
