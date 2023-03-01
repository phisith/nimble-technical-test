import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export const searchKeywords = async (searchKey: {}) => {
    return prisma.scrapingData.findMany({
        where: searchKey
    })
}