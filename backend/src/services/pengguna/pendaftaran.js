import Prisma from '../../app/database.js';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';

const pendaftaranPengguna = async (data) => {
  const {username, password, namaLengkap, namaIbuKandung} = data;
  try {
    return await Prisma.user.create({
      data: {
        id: uuid(),
        username: username.toLowerCase(),
        password: await bcrypt.hash(password, 10),
        nama_lengkap: namaLengkap,
        nama_ibu_kandung: namaIbuKandung
      },
      select: {
        nama_lengkap: true
      }
    })
  } catch (error) {
    return error.message;
  }
}

export default pendaftaranPengguna;