//complete this file
import { gql } from "@apollo/client";

export const UPDATE_TASK = gql`
  mutation UpdateTask($updateTaskId: ID!, $input: updateTaskInput) {
    updateTask(id: $updateTaskId, input: $input) {
      id
      name
      category
      priorityLevel
      duration
      isDone
      date
      createdAt
      updatedAt
    }
  }
`;
export const DELETE_TASK = gql`
  mutation DeleteTask($deleteTaskId: ID!) {
    deleteTask(id: $deleteTaskId) {
      id
      name
      category
      priorityLevel
      isDone
      duration
      date
      createdAt
      updatedAt
    }
  }
`;
