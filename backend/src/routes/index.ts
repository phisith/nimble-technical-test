import { Router } from "express";
import { importCSV, getKeywords, getKeywordFull } from "../controllers";

const router = Router();

// get
router.get("/", (req, res) => {
  res.send("Hello from Express TS");
});

router.get("/searchKeywords", getKeywords);

router.get("/searchKeywordFull", getKeywordFull);

//post
router.post("/import_csv", importCSV);

export { router };
