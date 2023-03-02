import { Router } from "express";
import {
  importCSV,
  getKeywords,
  getKeywordFull,
  getTotalKeyword,
  createUser,
  login,
} from "../controllers";
import { authenticateToken } from "../middleware/jwtAuth";

const router = Router();

// get
router.get("/", (req, res) => {
  res.send("Hello from Express TS");
});

router.get("/searchKeywords", authenticateToken, getKeywords);

router.get("/searchKeywordFull", getKeywordFull);

router.get("/totalKeyword", getTotalKeyword);

router.get("/login", login);

//post
router.post("/import_csv", importCSV);

router.post("/createUser", createUser);

export { router };
