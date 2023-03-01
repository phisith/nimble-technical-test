import { request, response } from "express";
import { getScrapingData } from "../helpers/scraping";
import { InsertKeywordResultBulk } from "../query";

const importCSV = async (req: typeof request, res: typeof response) => {
  const keywords = req.body.data;
  const insertCode = req.body.insertCode;
  const resultScraping = [];
  for (let keyword of keywords) {
    let word: string = Object.values(keyword)[0].toString();
    let result = await getScrapingData(word);
    result["insertCode"] = insertCode;
    resultScraping.push(result);
  }
  let results = await InsertKeywordResultBulk(resultScraping);
  res.status(201);
  res.send({ data: results });
};

export { importCSV };
