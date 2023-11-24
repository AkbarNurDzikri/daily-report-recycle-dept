import Prisma from "../../../app/database.js";

const getMesinById = async (id) => {
  try {
    return await Prisma.masterMesin.findUnique({
      where: {
        id
      }
    });
  } catch (error) {
    return error.message;
  }
}

export default getMesinById;