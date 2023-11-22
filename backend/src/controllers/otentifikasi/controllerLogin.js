import cariPengguna from '../../services/pengguna/cariPengguna.js';
import passwordVerificator from '../../services/otentifikasi/passwordVerificator.js';

const controllerLogin = async (req, res) => {
  const user = await cariPengguna(req.body.username.toLowerCase());
  if(typeof user !== 'object') return res.status(500).json({errors: user});
  if(!user) return res.status(403).json({errors: 'Username / password salah !'});

  const passwordMatch = await passwordVerificator(req.body.password, user.password);
  if(!passwordMatch) return res.status(403).json({errors: 'Username / password salah !'});

  res.status(200).json({message: 'Berhasil login'});
}

export default controllerLogin;