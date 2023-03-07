import * as cheerio from "cheerio";
import * as unirest from "unirest";
import { selectRandomUser } from "../ramdomUser";
import { formatKeyWord } from "../format";
import { UpdateKeywordResult } from "../../query";

const getScrapingData = async (keyword: string, id: number) => {
  try {
    // const url = "https://www.google.com/search?q=life+insurance&hl=en&gl=th";
    const url = `https://www.google.com/search?q=${formatKeyWord(
      keyword
    )}&hl=en`;

    const response = await unirest.get(encodeURI(url)).headers({
      "User-Agent": selectRandomUser(),
    });

    let $ = cheerio.load(response.body);

    const ads = [];
    const subAds = [];
    const allLink = [];
    const subLink = [];
    let result = null;
    let result_time = null;

    // AdWord
    $(".v5yQqb > a").each((i, el) => {
      ads[i] = $(el).attr("href");
    });

    // sub AdWord
    $(".MUxGbd > a").each((i, el) => {
      subAds[i] = $(el).attr("href");
    });

    // allLink
    $(".yuRUbf > a").each((i, el) => {
      allLink[i] = $(el).attr("href");
    });

    //subLink
    $(".usJj9c > h3 > a").each((i, el) => {
      subLink[i] = $(el).attr("href");
    });

    // result
    $(".LHJvCe > div").each((i, el) => {
      const rawResult = $(el).text().trim().split(/[' ]/);
      result = Number(rawResult[1].replace(/,/g, ""));
      result_time = rawResult[3].substring(1);
    });

    let htmlCode = $.root().html();

    // return {
    //   keyword: keyword,
    //   adWords: ads.length,
    //   totalLink: allLink.length + +subLink.length + ads.length + subAds.length,
    //   result: result,
    //   resultTime: result_time,
    //   htmlCode: htmlCode,
    // };
    let finalResult = {
      keyword: keyword,
      adWords: ads.length,
      totalLink: allLink.length + +subLink.length + ads.length + subAds.length,
      result: result,
      resultTime: result_time,
      htmlCode: htmlCode,
      status: "s",
    };
    return await UpdateKeywordResult({
      where: { id: id },
      data: finalResult,
    });
  } catch (e) {
    console.log(e);
    await UpdateKeywordResult({
      where: { id: id },
      data: { status: "f" },
    });
  }
};

// const ScrapingProcess = () => {
//     let
//     try {
//         // const url = "https://www.google.com/search?q=life+insurance&hl=en&gl=th";
//         const url = `https://www.google.com/search?q=${formatKeyWord(keyword)}&hl=en`
//
//         const response = await unirest
//             .get(encodeURI(url))
//             .headers({
//                 "User-Agent":
//                     selectRandomUser()
//             })
//
//         let $ = cheerio.load(response.body);
//
//         const ads = []
//         const subAds = []
//         const allLink = []
//         const subLink = []
//         let result = null
//         let result_time = null
//
//         // AdWord
//         $(".v5yQqb > a").each((i, el) => {
//             ads[i] = $(el).attr("href");
//         })
//
//         // sub AdWord
//         $(".MUxGbd > a").each((i, el) => {
//             subAds[i] = $(el).attr("href");
//         })
//
//         // allLink
//         $(".yuRUbf > a").each((i, el) => {
//             allLink[i] = $(el).attr("href");
//         })
//
//         //subLink
//         $(".usJj9c > h3 > a").each((i, el) => {
//             subLink[i] = $(el).attr("href");
//         })
//
//         // result
//         $(".LHJvCe > div").each((i, el) => {
//             const rawResult = $(el).text().trim().split(/[' ]/)
//             result = Number(rawResult[1].replace(/,/g, ''))
//             result_time = rawResult[3].substring(1)
//         })
//
//         let htmlCode = $.root().html()
//
//         return {
//             keyword: keyword,
//             adWords: ads.length,
//             totalLink: allLink.length + +subLink.length + ads.length + subAds.length,
//             result: result,
//             resultTime: result_time,
//             htmlCode: htmlCode
//         }
//
//     } catch (e) {
//         console.log(e);
//     }
//
// }

export { getScrapingData };
