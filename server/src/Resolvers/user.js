import { ApolloError, AuthenticationError } from "apollo-server-express";
import dotenv from "dotenv";
import { hash, compare } from "bcryptjs";
import {
  serializeUser,
  createActivationToken,
  verifyUser,
  createAccessToken,
  verifyId,
} from "../utils/Userfunctions.js";
import { User } from "../Database/Models";
import { sendEmail } from "../utils/EmailService";
dotenv.config();
const resolvers = {
  Query: {
    authUser: (_, __, { req: { user } }) => user,
  },
  Mutation: {
    signin: async (_, { email, password }) => {
      try {
        let user = await User.findOne({
          email,
        });
        if (!user) {
          throw new AuthenticationError("Email not found");
        }

        const isMatch = await compare(password, user.password);

        user = await serializeUser(user);
        if (!isMatch) {
          throw new AuthenticationError("Incorrect Password");
        } else {
          if (user.status === "Active") {
            let token = await createActivationToken(user);
            return {
              user,
              token,
            };
          } else {
            throw new AuthenticationError(
              "Pending Account. Please Verify Your Email. If you cannot find the email in your inboxes, please check your spam."
            );
          }
        }
      } catch (err) {
        throw new ApolloError(err.message);
      }
    },
    signup: async (_parent, { newUser }) => {
      try {
        let { email, username } = newUser;

        let user = await User.findOne({
          username,
        });
        if (user) {
          throw new ApolloError("Username is already taken", "400");
        }

        user = await User.findOne({
          email,
        });
        if (user) {
          throw new ApolloError("Email is already registred", "400");
        }
        user = new User(newUser);

        user.password = await hash(user.password, 12);
        let result = await user.save();
        result = await serializeUser(result);
        let activation_token = await createActivationToken(result);
        let verificationUrl = `${process.env.CLIENT_URL}/user/activate/${activation_token}`;

        sendEmail(
          result.email,
          result.username,
          verificationUrl,
          "confirmation"
        );
        return {
          message:
            "To confirm your account, please check your email. If you cannot find the email in your inboxes, please check your spam.",
        };
      } catch (err) {
        throw new ApolloError(err.message);
      }
    },
    activateEmail: async (_parent, { token }) => {
      try {
        let { id, status, iat, exp, ...input } = await verifyUser(token);
        console.log(verifyUser(token));
        const user = await User.findByIdAndUpdate(
          { _id: id },
          { ...input, status: "Active" },
          { new: true }
        );
        if (!user) throw new AuthenticationError("User not found");

        return {
          message: "Account is activated successfully.",
        };
      } catch (err) {
        throw new ApolloError(err.message);
      }
    },

    forgotPassword: async (_parent, { email }) => {
      try {
        let user = await User.findOne({
          email,
        });
        if (!user) {
          throw new AuthenticationError("Email not found");
        }
        let reset_token = await createAccessToken({ id: user._id });
        let url = `${process.env.CLIENT_URL}/user/reset/${reset_token}`;
        sendEmail(email, user.username, url, "reset");
        return {
          message:
            "Please check your email. If you cannot find the email in your inboxes, please check your spam.",
        };
      } catch (err) {
        throw new ApolloError(err.message);
      }
    },

    resetPassword: async (_parent, { token, newPassword }) => {
      try {
        let { id } = await verifyId(token);
        newPassword = await hash(newPassword, 12);
        const user = await User.findOneAndUpdate(
          { _id: id },
          { password: newPassword }
        );
        if (!user) throw new AuthenticationError("User not found");
        return {
          message: "Reset password successfully.",
        };
      } catch (err) {
        throw new ApolloError(err.message);
      }
    },
  },
};

export default resolvers;
