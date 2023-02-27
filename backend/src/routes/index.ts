import {Router} from "express"

const router = Router()

// get
router.get("/", (req, res) => {
    res.send("Hello from Express TS");
});

//post
router.post("/import_csv", (req, res) => {
    console.log(req.body.data)
    res.send("Done")
})


export {router}