const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    user(email: String!): User
  }

  extend type Mutation {
    signup(input: signupInput): Auth
    signin(input: signinInput): Auth
  }

  input signupInput {
    firstName: String!
    lastName: String!
    email: String!
    userName: String!
    password: String!
  }

  input signinInput {
    email: String!
    password: String!
  }
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    userName: String!
    createdAt: Date!
    updatedAt: Date!
  }

  type Auth {
    token: ID!
    user: User
  }
`;
module.exports = typeDefs;
