import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const searchKeywords = async (searchKey: {}, sortingBy: {}) => {
  return prisma.scrapingData.findMany({
    where: searchKey,
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
