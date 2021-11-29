import jwt from "jsonwebtoken";
import User from "../Database/Models/User.js";

const SECRET = "thisIsASecret";

export const AuthMiddleware = async (req) => {
  // Extract Authorization Header
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    req.isAuth = false;
    return req;
  }

  // Extract the token and check for token
  const token = authHeader.replace("Bearer ", "");
  if (!token || token === "") {
    req.isAuth = false;
    return req;
  }

  // Verify the extracted token
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, SECRET);
  } catch (err) {
    req.isAuth = false;
    return req;
  }

  // If decoded token is null then set authentication of the request false
  if (!decodedToken) {
    req.isAuth = false;
    return req;
  }

  // If the user has valid token then Find the user by decoded token's id
  let authUser = await User.findById(decodedToken.id);
  if (!authUser) {
    req.isAuth = false;
  } else {
    req.isAuth = true;
    req.user = authUser;
  }

  return req;
};
