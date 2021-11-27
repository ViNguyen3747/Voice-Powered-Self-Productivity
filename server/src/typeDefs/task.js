const { gql } = require("apollo-server-express");

const typeDefs = gql`
  enum Category {
    Professional
    Physical
    Pratical
    Social
    Spiritual
    Mental
    Emotional
  }

  enum prioritylevel {
    A
    B
    C
    D
  }

  extend type Query {
    tasks(category: Category): [Task!]! @isAuth
    task(id: ID!): Task! @isAuth
  }

  input addTaskInput {
    name: String!
    category: Category!
    prioritylevel: prioritylevel!
    duration: Float!
    isDone: Boolean!
    date: Date
  }
  input updateTaskInput {
    name: String
    category: Category
    prioritylevel: prioritylevel
    duration: Float
    isDone: Boolean
    date: Date
  }

  extend type Mutation {
    addTask(input: addTaskInput!): Task! @isAuth
    updateTask(id: ID!, input: updateTaskInput): Task! @isAuth
    deleteTask(id: ID!): Message! @isAuth
  }
  type Message {
    message: String!
    success: Boolean
  }
  type Task {
    id: ID!
    name: String!
    category: Category!
    prioritylevel: prioritylevel!
    duration: Float!
    isDone: Boolean!
    date: Date!
    owner: ID!
    createdAt: Date!
    updatedAt: Date!
  }
`;

export default typeDefs;
