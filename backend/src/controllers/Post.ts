import {request, response} from "express";
import {getScrapingData} from "../helpers/scraping";


const importCSV = async (req: typeof request, res: typeof response) => {
    const keywords = req.body.data
    const results = []
    for (let keyword of keywords) {
        let word: string = Object.values(keyword)[0].toString()
        let result = await getScrapingData(word)
        results.push(result)
    }
    res.status(201)
    res.send({data: results})
}

export {importCSV}