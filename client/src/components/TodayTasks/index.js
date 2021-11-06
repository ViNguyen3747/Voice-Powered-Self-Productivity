import React from "react";
import "../common/Styles/commonStyles.css";
import Form from "../common/Form";
import { gql, useQuery } from "@apollo/client";

const GET_TASKS = gql`
  query Tasks {
    tasks {
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
  return (
    <div className="container">
      <div className="wrapper">
        <Form />
      </div>
    </div>
  );
};

export default Today;
