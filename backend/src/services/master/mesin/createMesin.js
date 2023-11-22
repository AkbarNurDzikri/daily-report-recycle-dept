import Prisma from '../../../app/database.js';
import { v4 as uuid } from 'uuid';

const createMesin = async (namaMesin) => {
  try {
    return await Prisma.masterMesin.create({
      data: {
        id: uuid(),
        nama_mesin: namaMesin
      }
    })
  } catch (error) {
    return error.message;
  }
}

export default createMesin;