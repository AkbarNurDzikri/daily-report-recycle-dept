import bcrypt from 'bcrypt';

const passwordVerificator = async (stringPassword, hashedPassword) => {
  return await bcrypt.compare(stringPassword, hashedPassword);
}

export default passwordVerificator;