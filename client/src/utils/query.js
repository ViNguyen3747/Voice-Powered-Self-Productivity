//complete this file
import { gql } from "@apollo/client";

export const GET_TASKS = gql`
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
