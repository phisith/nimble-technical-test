import express, { Express } from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import { router } from "./routes";
import { globalType } from "./type";
import EventEmitter from "./utils/event";
globalType();

const eventEmitter = new EventEmitter();

const sleep = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  }).catch(function () {});
};

async function longPollEvent() {
  while (true) {
    const waitTimeMS = Math.floor(Math.random() * 10000);
    await sleep(waitTimeMS);
    eventEmitter.fire({ time: waitTimeMS });
  }
}

const PORT = process.env.BACKEND_PORT;
const app: Express = express();
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

// inconsistent
// app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors(corsOptions));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`now Listening  on port ${PORT}`);
  longPollEvent();
});
