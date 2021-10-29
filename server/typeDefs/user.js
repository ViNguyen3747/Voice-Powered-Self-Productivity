const { gql } = require("apollo-server-express");

const typeDefs = gql`
    extend type Query {
        user: User
    }

    extend Mutation{
        signup(input: signupInput): User
        signin(input: signinInput): Token
    }

    input signupInput{
        firstName: String!
        lastName: String!
        email: String!
        userName: String!
        password: String!
    }
    type Token{
        token: String!
    }
    input signinInput {
        userName: String!
        password: String!
    }
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        userName: String!
        tasks: [Task!]
        createdAt: Date!
        updatedAt: Date!
    }

    extend type Subscription {
        userCreated: User
    }
`;
module.exports = typeDefs;
