import { gql } from "apollo-server-express";

const typeDefs = gql`
  enum Status {
    Pending
    Active
  }
  extend type Query {
    authUser: User! @isAuth
  }

  extend type Mutation {
    signup(newUser: signupInput!): Auth!
    signin(email: String!, password: String!): Auth!
    activateEmail(token: String!): Auth!
    forgotPassword(email: String!): Message!
    resetPassword(token: String!, newPassword: String!): Auth!
  }

  input signupInput {
    firstName: String!
    lastName: String!
    email: String!
    username: String!
    password: String!
    status: Status!
  }

  input signinInput {
    email: String!
    password: String!
    status: Status!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    username: String!
    status: Status!
    createdAt: Date!
    updatedAt: Date!
  }

  type Auth {
    token: String!
    user: User!
  }

  type Message {
    message: String!
  }
`;
export default typeDefs;
