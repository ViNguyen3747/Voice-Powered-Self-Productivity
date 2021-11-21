import { pick } from "lodash";

import jwt from "jsonwebtoken";
// const secret = process.env.SECRET_KEY;
const SECRET = "thisIsASecret";

const issueAuthToken = async (jwtPayload) => {
  let token = await jwt.sign(jwtPayload, SECRET, {
    expiresIn: 3600 * 24,
  });
  return token;
};

const serializeUser = (user) =>
  pick(user, ["id", "email", "username", "lastName", "firstName"]);
export { issueAuthToken, serializeUser };
