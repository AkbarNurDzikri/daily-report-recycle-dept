import Prisma from "../../app/database.js";

const cariPengguna = async (username) => {
  try {
    return await Prisma.user.findFirst({
      where: {
        username
      },
      select: {
        username: true,
        password: true
      }
    });
  } catch (error) {
    return error.message;
  }
}

export default cariPengguna;