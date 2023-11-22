import Prisma from "../../../app/database.js";

const cariMesin = async (namaMesin) => {
  try {
    return await Prisma.masterMesin.findFirst({
      where: {
        nama_mesin: namaMesin
      },
      select: {
        nama_mesin: true
      }
    })
  } catch (error) {
    return error.message;
  }
}

export default cariMesin;