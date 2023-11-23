import Prisma from "../../../app/database.js";

const getAllMesin = async () => {
  try {
    return await Prisma.masterMesin.findMany();
  } catch (error) {
    return error.message;
  }
}

export default getAllMesin;