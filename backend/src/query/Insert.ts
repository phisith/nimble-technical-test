import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcrypt";

const prisma = new PrismaClient();
export const InsertKeywordResultBulk = async (keywords: any[]) => {
  return prisma.scrapingData.createMany({
    data: keywords,
  });
};

export const InsertNewUser = async (userInfo: any) => {
  // userInfo.password = await bcrypt.hashSync(userInfo.password, 12);
  return prisma.user.create({ data: userInfo });
};
