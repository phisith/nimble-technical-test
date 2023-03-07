import { request, response } from "express";
import { getScrapingData } from "../helpers/scraping";
import {
  InsertKeywordResultBulk,
  countKeywords,
  searchKeywordFull,
  searchKeywords,
} from "../query";

const importCSV = async (req: typeof request, res: typeof response) => {
  const keywords = req.body.data;
  const insertCode = req.body.insertCode;
  const resultScraping = [];
  try {
    for (let keyword of keywords) {
      let word: string = Object.values(keyword)[0].toString();
      let result = await getScrapingData(word);
      result["insertCode"] = insertCode;
      resultScraping.push(result);
    }
    let results = await InsertKeywordResultBulk(resultScraping);
    res.status(201).json({ data: results });
  } catch (err) {
    console.log(err);
    res.status(500).json({ data: [] });
  }
};
const getKeywords = async (req: typeof request, res: typeof response) => {
  const searchKey = req.query.searchKey;
  const sortingBy = req.query.sortingBy;
  const skip = req.query.skip;
  // console.log(req.query.searchKey);
  let results = await searchKeywords(searchKey, sortingBy, Number(skip) | 0);
  res.status(200).json(results);
};

const getKeywordFull = async (req: typeof request, res: typeof response) => {
  const idx = req.query.idx;
  let results = await searchKeywordFull(Number(idx));
  res.status(200).json(results);
};

const getTotalKeyword = async (req: typeof request, res: typeof response) => {
  const searchKey = req.query.searchKey;
  let results = await countKeywords(searchKey);
  res.status(200).json(results);
};

export { getKeywords, getKeywordFull, getTotalKeyword, importCSV };
