import { pick } from "lodash";
import dotenv from "dotenv";

import jwt from "jsonwebtoken";
dotenv.config();

const createActivationToken = async (jwtPayload) => {
  let token = await jwt.sign(jwtPayload, process.env.ACTIVATION_TOKEN_SECRET, {
    expiresIn: "5m",
  });
  return token;
};

const createAccessToken = async (jwtPayload) => {
  let token = await jwt.sign(jwtPayload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
  return token;
};

const createRefreshToken = async (jwtPayload) => {
  let token = await jwt.sign(jwtPayload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
  return token;
};

const verifyUser = async (token) => {
  return jwt.verify(token, process.env.ACTIVATION_TOKEN_SECRET);
};

const verifyId = async (token) => {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
};
const serializeUser = (user) =>
  pick(user, [
    "id",
    "email",
    "username",
    "lastName",
    "firstName",
    "status",
    "password",
  ]);
export {
  verifyUser,
  createActivationToken,
  serializeUser,
  createAccessToken,
  createRefreshToken,
  verifyId,
};
