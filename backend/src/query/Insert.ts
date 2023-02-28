import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()
export const InsertKeywordResultBulk = async (keywords: any[]) => {
    return prisma.scrapingData.createMany({
        data: keywords
    });
}