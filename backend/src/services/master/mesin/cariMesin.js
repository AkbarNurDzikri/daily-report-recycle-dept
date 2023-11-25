import Prisma from "../../../app/database.js";

const cariMesin = async (machineName) => {
  try {
    return await Prisma.masterMesin.findFirst({
      where: {
        nama_mesin: machineName
      },
      select: {
        nama_mesin: true
      }
    })
  } catch (error) {
    return error.message;
  }
}

const cariMesinKecuali = async (id, machineName) => {
  try {
    return await Prisma.masterMesin.findFirst({
      where: {
        nama_mesin: machineName,
        NOT: {
          id
        }
      },
      select: {
        nama_mesin: true
      }
    })
  } catch (error) {
    return error.message;
  }
}

export {
  cariMesin,
  cariMesinKecuali
}