import {Router} from "express"
import {importCSV, getKeywords} from "../controllers";

const router = Router()


// get
router.get("/", (req, res) => {
    res.send("Hello from Express TS");
});

router.get("/searchKeywords", getKeywords)

//post
router.post("/import_csv", importCSV)


export {router}