import * as cheerio from "cheerio"
import * as unirest from "unirest"
import {selectRandomUser} from "../ramdomUser";
import {formatKeyWord} from "../format";

const getScrapingData = async (keyword: string) => {
    try {
        // const url = "https://www.google.com/search?q=life+insurance&hl=en&gl=th";
        const url = `https://www.google.com/search?q=${formatKeyWord(keyword)}&hl=en`

        const response = await unirest
            .get(encodeURI(url))
            .headers({
                "User-Agent":
                    selectRandomUser()
            })

        let $ = cheerio.load(response.body);

        const ads = []
        const subAds = []
        const allLink = []
        const subLink = []
        let result = null
        let result_time = null

        // AdWord
        $(".v5yQqb > a").each((i, el) => {
            ads[i] = $(el).attr("href");
        })

        // sub AdWord
        $(".MUxGbd > a").each((i, el) => {
            subAds[i] = $(el).attr("href");
        })

        // allLink
        $(".yuRUbf > a").each((i, el) => {
            allLink[i] = $(el).attr("href");
        })

        //subLink
        $(".usJj9c > h3 > a").each((i, el) => {
            subLink[i] = $(el).attr("href");
        })

        // result
        $(".LHJvCe > div").each((i, el) => {
            const rawResult = $(el).text().trim().split(/[' ]/)
            result = rawResult[1].replace(',', '')
            result_time = rawResult[3].substring(1)
        })

        let htmlCode = $.root().html()

        return {
            keyword: keyword,
            ad_words: ads.length,
            total_link: allLink.length + +subLink.length + ads.length + subAds.length,
            result: result,
            result_time: result_time,
            html_code: htmlCode
        }

    } catch (e) {
        console.log(e);
    }

}

export {getScrapingData}