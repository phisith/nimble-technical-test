import { request, response } from "express";
import {
  countKeywords,
  searchKeywordFull,
  searchKeywords,
} from "../query/Read";

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

export { getKeywords, getKeywordFull, getTotalKeyword };
