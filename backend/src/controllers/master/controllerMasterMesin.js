import createMesin from "../../services/master/mesin/createMesin.js";
import getAllMesin from "../../services/master/mesin/getAllMesin.js";
import cariMesin from "../../services/master/mesin/cariMesin.js";
import getMesinById from "../../services/master/mesin/getMesinById.js";

const createMasterMesin = async (req, res) => {
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

const getAllMasterMesin = async (req, res) => {
  const result = await getAllMesin();
  if(typeof result !== 'object') return res.status(500).json({errors: result});

  return res.status(200).json({data: result});
}

const getUniqueMesin = async (req, res) => {
  const id = req.params.id;
  const result = await getMesinById(id);
  if(typeof result !== 'object') return res.status(500).json({errors: result});

  return res.status(200).json({data: result});
};

export {
  createMasterMesin,
  getAllMasterMesin,
  getUniqueMesin
}