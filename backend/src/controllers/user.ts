import { request, response } from "express";
import { generateAccessToken } from "../utils/jwt";
import { InsertNewUser, findUser } from "../query";

const login = async (req: typeof request, res: typeof response) => {
  const userInfo: any = req.query.userInfo;
  let user = await findUser(userInfo);
  if (user) {
    if (user.password === userInfo.password) {
      const token = generateAccessToken({ username: req.body.username });
      res.status(200).json({ key: token });
    } else {
      res.status(404).json({ msg: "Wrong password" });
    }
  } else {
    res.status(404).json({ msg: "User's not found" });
  }
};

const createUser = async (req: typeof request, res: typeof response) => {
  const userInfo = req.body.userInfo;
  let results = await InsertNewUser(userInfo);
  if (results === "") {
    res.status(404).json({ msg: "user already exits" });
  } else {
    res.status(201).json({ data: results });
  }
};

export { login, createUser };
