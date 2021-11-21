import { ApolloError } from "apollo-server-express";
import { hash, compare } from "bcryptjs";
import { serializeUser, issueAuthToken } from "../utils/Userfunctions.js";
import { User } from "../Database/Models";
const resolvers = {
  Query: {
    authUser: (_, __, { req: { user } }) => user,
  },
  Mutation: {
    signin: async (_, { email, password }) => {
      let user = await User.findOne({
        email,
      });
      //user not foud
      if (!user) {
        throw new ApolloError("Username not found", "404");
      }
      // If user is found then compare the password
      let isMatch = compare(password, user.password);
      // If Password don't match
      if (!isMatch) {
        throw new ApolloError("Username not found", "403");
      }
      user = await serializeUser(user);
      // Issue Token
      let token = await issueAuthToken(user);
      return {
        user,
        token,
      };
    },
    signup: async (_parent, { newUser }) => {
      try {
        let { email, username } = newUser;

        // Check if the Username is taken
        let user = await User.findOne({
          username,
        });
        if (user) {
          throw new ApolloError("Username is already taken.", "403");
        }

        // Check is the Email address is already registred
        user = await User.findOne({
          email,
        });
        if (user) {
          throw new ApolloError("Email is already registred.", "403");
        }

        // New User's Account can be created
        user = new User(newUser);

        // Hash the user password
        user.password = await hash(user.password, 10);

        // Save the user to the database
        let result = await user.save();
        result = await serializeUser(result);
        // Issue Token
        let token = await issueAuthToken(result);
        return {
          token,
          user: result,
        };
      } catch (err) {
        throw new ApolloError(err.message);
      }
    },
  },
};

export default resolvers;
