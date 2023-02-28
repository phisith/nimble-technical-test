import express, {Express} from "express";
import cors from "cors"
import {router} from "./routes";

const app: Express = express()
const PORT = process.env.BACKEND_PORT
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(express.json());

app.use(cors(corsOptions))

app.use("/", router)

app.listen(PORT, () => {
    console.log(`now Listening on port ${PORT}`);
});

