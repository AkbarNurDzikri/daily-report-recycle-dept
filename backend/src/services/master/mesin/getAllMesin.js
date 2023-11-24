import Prisma from "../../../app/database.js";

const getAllMesin = async () => {
  try {
    return await Prisma.masterMesin.findMany({
      orderBy: {
        nama_mesin: 'asc'
      }
    });
  } catch (error) {
    return error.message;
  }
}

export default getAllMesin;