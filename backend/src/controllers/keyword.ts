import { request, response } from "express";
import { getScrapingData } from "../helpers/scraping";
import {
  InsertKeywordResultBulk,
  countKeywords,
  searchKeywordFull,
  searchKeywords,
} from "../query";
import Queue from "bull";
import EventEmitter from "../utils/event";
const queue = new Queue("scraping-queue", {
  redis: {
    port: 6379,
    host: "redis",
  },
});

const eventEmitter = new EventEmitter();

const importCSV = async (req: typeof request, res: typeof response) => {
  const keywords = req.body.data;
  const insertCode = req.body.insertCode;
  // const resultScraping = [];
  const resultKeyword = [];
  try {
    for (let keyword of keywords) {
      let word: string = Object.values(keyword)[0].toString();
      // let result = await getScrapingData(word);
      let result = {
        keyword: word,
        status: "p",
        insertCode: insertCode,
      };
      // result["insertCode"] = insertCode;
      // resultScraping.push(result);
      resultKeyword.push(result);
    }
    // let results = await InsertKeywordResultBulk(resultScraping);
    let results = await InsertKeywordResultBulk(resultKeyword);
    res.status(201).json({ data: results });
  } catch (err) {
    console.log(err);
    res.status(500).json({ data: [] });
  }
};
const getKeywords = async (req: typeof request, res: typeof response) => {
  const id = Date.now().toString();
  const searchKey = req.query.searchKey;
  const sortingBy = req.query.sortingBy;
  const skip = req.query.skip;
  const isLongPoll = req.query.isLongPoll;
  let timer = null;
  if (isLongPoll) {
    const handler = async (event) => {
      console.log("event", event);
      res.end([]);
    };
    eventEmitter.register(id, handler);
    timer = setTimeout(async () => {
      const wasUnregistered = eventEmitter.unregister(id);
      if (wasUnregistered) {
        let results = await searchKeywords(
          searchKey,
          sortingBy,
          Number(skip) | 0
        );
        res.status(200).json(results);
      }
    }, 5000);
  } else {
    let results = await searchKeywords(searchKey, sortingBy, Number(skip) | 0);
    res.status(200).json(results);
  }
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

const scrapingJob = async (req: typeof request, res: typeof response) => {
  const insertCode = req.body.insertCode;
  const skip = req.query.skip;
  let keywordInDb: any = await searchKeywords(
    { status: "p", insertCode: insertCode },
    {},
    Number(skip) | 0
  );

  try {
    for (let keyword of keywordInDb) {
      let word = keyword.keyword;
      queue
        .add({
          keyword: word,
          id: keyword.id,
        })
        .catch((err) => {
          console.log(err);
        });
    }

    queue
      .process(async (job, done) => {
        job.progress("progress");
        await getScrapingData(job.data.keyword, job.data.id);
        done();
      })
      .catch((err) => {
        console.log(err);
      });
    res.status(200).json(keywordInDb);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "job processor fail" });
  }
};

queue.on("progress", function (job) {
  console.log(`Job ${job.id} is in progress!`);
});

queue.on("completed", (job) => {
  console.log(`Job with id ${job.id} is done`);
});

export { getKeywords, getKeywordFull, getTotalKeyword, importCSV, scrapingJob };
