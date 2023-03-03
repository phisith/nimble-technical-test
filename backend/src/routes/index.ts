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

router.get("/searchKeywordFull", authenticateToken, getKeywordFull);

router.get("/totalKeyword", authenticateToken, getTotalKeyword);

router.get("/login", login);

router.get("/simple-verify", authenticateToken, (req, res) => {
  res.status(200).json("Verified");
});

//post
router.post("/import_csv", authenticateToken, importCSV);

router.post("/createUser", createUser);

export { router };
