//complete this file
import { gql } from "@apollo/client";

export const GET_TASKS = gql`
  query Tasks($category: Category) {
    tasks(category: $category) {
      id
      name
      category
      priorityLevel
      duration
      isDone
      createdAt
    }
  }
`;
export const GET_TASK = gql`
  query Task($taskId: ID!) {
    task(id: $taskId) {
      name
      id
      category
      priorityLevel
      duration
      isDone
      createdAt
    }
  }
`;
