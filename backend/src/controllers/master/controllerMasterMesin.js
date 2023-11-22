import createMesin from "../../services/master/mesin/createMesin.js";
import cariMesin from "../../services/master/mesin/cariMesin.js";

const controllerMasterMesin = async (req, res) => {
  const mesinEksis = await cariMesin(req.body.namaMesin);
  if(typeof mesinEksis !== 'object') return res.status(500).json({errors: mesinEksis});
  if(mesinEksis) return res.status(403).json({errors: `Maaf, nama mesin ${req.body.namaMesin} sudah terdaftar !`});

  const mesinBaru = await createMesin(req.body.namaMesin);
  if(mesinBaru.nama_mesin) {
    return res.status(201).json({message: 'Berhasil menambahkan master mesin'});
  } else {
    return res.status(500).json({errors: `Terjadi kesalahan<br /> ${mesinBaru}`});
  }
}

export default controllerMasterMesin;