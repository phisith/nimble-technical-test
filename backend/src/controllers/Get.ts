import { request, response } from "express";
import { searchKeywordFull, searchKeywords } from "../query/Read";

const getKeywords = async (req: typeof request, res: typeof response) => {
  const searchKey = req.query.searchKey;
  const sortingBy = req.query.sortingBy;
  // console.log(req.query.searchKey);
  let results = await searchKeywords(searchKey, sortingBy);
  res.status(200);
  res.send(results);
};

const getKeywordFull = async (req: typeof request, res: typeof response) => {
  const idx = req.query.idx;
  let results = await searchKeywordFull(Number(idx));
  res.status(200);
  res.send(results);
};

export { getKeywords, getKeywordFull };
