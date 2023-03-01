import { request, response } from "express";
import { searchKeywords } from "../query/Read";

const getKeywords = async (req: typeof request, res: typeof response) => {
  const searchKey = req.query;
  let results = await searchKeywords(searchKey);
  res.status(200);
  res.send(results);
};

export { getKeywords };
