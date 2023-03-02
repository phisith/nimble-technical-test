import { PrismaClient } from "@prisma/client";
import { formatKeywordsSearch } from "../helpers/format";

const prisma = new PrismaClient();

export const searchKeywords = async (
  searchKey: {},
  sortingBy: {},
  skip: number
) => {
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
};

export const countKeywords = (searchKey: {}) => {
  return prisma.scrapingData.count({
    where: formatKeywordsSearch(searchKey),
  });
};

export const searchKeywordFull = async (idx: number) => {
  return prisma.scrapingData.findUnique({
    where: { id: idx },
  });
};
