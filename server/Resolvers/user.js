const { AuthenticationError } = require("apollo-server-express");
const User = require("../Database/Models/User");
const { signToken } = require("../middleware/auth");

const resolvers = {
  Query: {
    user: async (_parent, { email }) => {
      return User.findOne({ email }).select("-__v -password");
    },
  },
  Mutation: {
    signup: async (_parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    signin: async (_parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect Username");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect Password");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
