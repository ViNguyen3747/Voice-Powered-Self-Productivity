import { gql } from "apollo-server-express";

const typeDefs = gql`
  extend type Query {
    authUser: User! @isAuth
  }

  extend type Mutation {
    signup(newUser: signupInput!): Auth!
    signin(email: String!, password: String!): Auth!
  }

  input signupInput {
    firstName: String!
    lastName: String!
    email: String!
    username: String!
    password: String!
    retypePassword: String!
  }

  input signinInput {
    email: String!
    password: String!
  }
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    username: String!
    createdAt: Date!
    updatedAt: Date!
  }

  type Auth {
    token: String!
    user: User!
  }
`;
export default typeDefs;
