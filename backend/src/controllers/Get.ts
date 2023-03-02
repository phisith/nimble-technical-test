import { request, response } from "express";
import { searchKeywords } from "../query/Read";

const getKeywords = async (req: typeof request, res: typeof response) => {
  const searchKey = req.query.searchKey;
  const sortingBy = req.query.sortingBy;
  // console.log(req.query.searchKey);
  let results = await searchKeywords(searchKey, sortingBy);
  res.status(200);
  res.send(results);
};

export { getKeywords };