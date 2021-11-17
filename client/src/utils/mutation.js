import gql from "graphql-tag";

export const signin = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const signup = gql`
  mutation signup(
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

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
