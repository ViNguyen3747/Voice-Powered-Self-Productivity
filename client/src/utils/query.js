//complete this file
import { gql, useQuery } from "@apollo/client";

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
