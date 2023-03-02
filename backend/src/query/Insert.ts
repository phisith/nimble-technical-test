import { PrismaClient } from "@prisma/client";
import { findUser } from "./Read";
// import bcrypt from "bcrypt";

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

export const InsertNewUser = async (userInfo: any) => {
  // userInfo.password = await bcrypt.hashSync(userInfo.password, 12);
  const user: any = await findUser(userInfo);
  if (user.userName === userInfo.userName) {
    return "";
  } else {
    return prisma.user.create({ data: userInfo });
  }
};
