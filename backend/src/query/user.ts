import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findUser = async (userInfo: any) => {
  try {
    return prisma.user.findUnique({
      where: { userName: userInfo.userName },
    });
  } catch (err) {
    console.log(err);
  }
};
export const InsertNewUser = async (userInfo: any) => {
  // userInfo.password = await bcrypt.hashSync(userInfo.password, 12);
  const user: any = await findUser(userInfo);
  if (user?.userName === userInfo?.userName) {
    return "";
  } else {
    return prisma.user.create({ data: userInfo });
  }
};
