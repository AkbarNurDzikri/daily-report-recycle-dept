import pendaftaranPengguna from "../../services/pengguna/pendaftaran.js";
import cariPengguna from "../../services/pengguna/cariPengguna.js";

const controllerPendaftaran =  async (req, res) => {
  const penggunaEksis = await cariPengguna(req.body.username.toLowerCase());
  if(typeof penggunaEksis !== 'object') return res.status(500).json({errors: penggunaEksis});
  if(penggunaEksis) return res.status(403).json({errors: `Maaf, username ${req.body.username.toLowerCase()} sudah terdaftar !`});

  const penggunaBaru = await pendaftaranPengguna(req.body);
  if(penggunaBaru.nama_lengkap) {
    return res.status(201).json({message: 'Pendaftaran berhasil'});
  } else {
    return res.status(500).json({errors: penggunaBaru});
  }
}

export default controllerPendaftaran;