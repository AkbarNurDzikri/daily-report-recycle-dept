import Prisma from '../../../app/database.js';
import { v4 as uuid } from 'uuid';

const createMesin = async (machineName) => {
  try {
    return await Prisma.masterMesin.create({
      data: {
        id: uuid(),
        nama_mesin: machineName
      }
    })
  } catch (error) {
    return error.message;
  }
}

export default createMesin;