import * as jwt from "jsonwebtoken";

export const generateAccessToken = (username) => {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "3h" });
};
