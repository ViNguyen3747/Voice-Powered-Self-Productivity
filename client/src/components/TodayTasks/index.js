import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Image } from "semantic-ui-react";

import "../common/Styles/commonStyles.css";
import "./Today.css";
import { categoriesOptions } from "../common/Data";
import Form from "../common/Form";
import TaskCard from "./TaskCard";
const GET_TASKS = gql`
  query Tasks {
    tasks {
      id
      name
      category
      priorityLevel
      duration
      isDone
    }
  }
`;
const Today = () => {
  const { loading, error, data } = useQuery(GET_TASKS);
  console.log(data);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>There was an error</div>;

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
