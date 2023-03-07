import { PrismaClient } from "@prisma/client";
import { formatKeywordsSearch } from "../helpers/format";

const prisma = new PrismaClient();
export const InsertKeywordResultBulk = async (keywords: any[]) => {
  try {
    return prisma.scrapingData.createMany({
      data: keywords,
    });
  } catch (err) {
    console.log(err);
  }
};

export const searchKeywords = async (
  searchKey: {},
  sortingBy: {},
  skip: number
) => {
  try {
    return prisma.scrapingData.findMany({
      take: 100,
      skip: skip,
      where: formatKeywordsSearch(searchKey),
      select: {
        id: true,
        createdAt: true,
        keyword: true,
        adWords: true,
        totalLink: true,
        result: true,
        resultTime: true,
      },
      orderBy: sortingBy,
    });
  } catch (err) {
    console.log(err);
  }
};

export const countKeywords = (searchKey: {}) => {
  try {
    return prisma.scrapingData.count({
      where: formatKeywordsSearch(searchKey),
    });
  } catch (err) {
    console.log(err);
  }
};

export const searchKeywordFull = async (idx: number) => {
  try {
    return prisma.scrapingData.findUnique({
      where: { id: idx },
    });
  } catch (err) {
    console.log(err);
  }
};
