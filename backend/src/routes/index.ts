import {Router} from "express"
import {importCSV} from "../controllers";

const router = Router()


// get
router.get("/", (req, res) => {
    res.send("Hello from Express TS");
});

//post
router.post("/import_csv", importCSV)


export {router}