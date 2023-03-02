import { request, response } from "express";
import { getScrapingData } from "../helpers/scraping";
import { InsertKeywordResultBulk, InsertNewUser } from "../query";

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
    res.status(201);
    res.send({ data: results });
  } catch (err) {
    console.log(err);
    res.status(500);
    res.send({ data: [] });
  }
};

const createUser = async (req: typeof request, res: typeof response) => {
  const userInfo = req.body.userInfo;
  let results = await InsertNewUser(userInfo);
  if (results === "") {
    res.status(404);
    res.send({ msg: "user already exits" });
  } else {
    res.status(201);
    res.send({ data: results });
  }
};

export { importCSV, createUser };
