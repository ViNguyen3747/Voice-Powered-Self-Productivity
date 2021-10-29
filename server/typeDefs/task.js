const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    tasks: [Task!]
    task(id: ID!): Task
  }

  enum Category {
    Professional
    Physical
    Pratical
    Social
    Spiritual
    Mental
  }

  enum PriorityLevel {
    A
    B
    C
    D
  }

  input addTaskInput {
    name: String!
    category: Category!
    priorityLevel: PriorityLevel!
    duration: Float!
    isDone: Boolean!
    date: Date
  }
  input updateTaskInput {
    name: String
    category: Category
    priorityLevel: PriorityLevel
    duration: Float
    isDone: Boolean
    date: Date
  }

  extend type Mutation {
    addTask(input: addTaskInput!): Task
    updateTask(id: ID!, input: updateTaskInput!): Task
    deleteTask(id: ID!): Task
  }
  type Task {
    id: ID!
    name: String!
    category: Category!
    priorityLevel: PriorityLevel!
    duration: Float!
    isDone: Boolean!
    date: Date!
    createdAt: Date!
    updatedAt: Date!
  }
`;
// type Task {
//   id: ID!
//   name: String!
//   category: Category!
//   priorityLevel: PriorityLevel!
//   duration: Float!
//   isDone: Boolean!
//   date: Date!
//   user: User!
//   createdAt: Date!
//   updatedAt: Date!
// }

module.exports = typeDefs;
