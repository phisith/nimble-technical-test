import { request, response } from "express";
import {
  countKeywords,
  findUser,
  searchKeywordFull,
  searchKeywords,
} from "../query/Read";
import { generateAccessToken } from "../utils/jwt";

const getKeywords = async (req: typeof request, res: typeof response) => {
  const searchKey = req.query.searchKey;
  const sortingBy = req.query.sortingBy;
  const skip = req.query.skip;
  // console.log(req.query.searchKey);
  let results = await searchKeywords(searchKey, sortingBy, Number(skip) | 0);
  res.status(200);
  res.send(results);
};

const getKeywordFull = async (req: typeof request, res: typeof response) => {
  const idx = req.query.idx;
  let results = await searchKeywordFull(Number(idx));
  res.status(200);
  res.send(results);
};

const getTotalKeyword = async (req: typeof request, res: typeof response) => {
  const searchKey = req.query.searchKey;
  let results = await countKeywords(searchKey);
  res.status(200).json(results);
};

const login = async (req: typeof request, res: typeof response) => {
  const userInfo: any = req.query.userInfo;
  let user = await findUser(userInfo);
  if (user) {
    if (user.password === userInfo.password) {
      const token = generateAccessToken({ username: req.body.username });
      res.status(200);
      res.send({ key: token });
    } else {
      res.status(404);
      res.send({ msg: "Wrong password" });
    }
  } else {
    res.send(404);
    res.send({ msg: "User's not found" });
  }
};

export { getKeywords, getKeywordFull, getTotalKeyword, login };
