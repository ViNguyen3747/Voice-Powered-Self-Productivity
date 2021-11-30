import { gql } from "@apollo/client";
export const signup = gql`
  mutation signup($newUser: signupInput!) {
    signup(newUser: $newUser) {
      token
      user {
        id
        username
      }
    }
  }
`;

export const LOG_IN = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;
export const ADD_TASK = gql`
  mutation AddTask($input: addTaskInput!) {
    addTask(input: $input) {
      id
      name
      category
      prioritylevel
      start
      finish
      duration
      isDone
      date
      owner
      createdAt
    }
  }
`;
export const UPDATE_TASK = gql`
  mutation UpdateTask($updateTaskId: ID!, $input: updateTaskInput) {
    updateTask(id: $updateTaskId, input: $input) {
      id
      name
      category
      prioritylevel
      duration
      start
      finish
      isDone
      date
      owner
      createdAt
      updatedAt
    }
  }
`;
export const DELETE_TASK = gql`
  mutation DeleteTask($deleteTaskId: ID!) {
    deleteTask(id: $deleteTaskId) {
      message
      success
    }
  }
`;
