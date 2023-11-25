import Prisma from "../../../app/database.js";

const updateData = async (id, machineName) => {
  try {
    return await Prisma.masterMesin.update({
      where: {
        id
      },
      data: {
        nama_mesin: machineName
      }
    })
  } catch (error) {
    return error.message;
  }
}

export default updateData;