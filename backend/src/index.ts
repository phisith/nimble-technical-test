import express, {Express, Request, Response} from "express";

const app: Express = express()
const PORT = process.env.BACKEND_PORT
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello Candy from Express TS");
});

app.listen(PORT, () => {
    console.log(`now Listening on port ${PORT}`);
});

