import createMesin from "../../services/master/mesin/createMesin.js";
import getAllMesin from "../../services/master/mesin/getAllMesin.js";
import { cariMesin, cariMesinKecuali } from "../../services/master/mesin/cariMesin.js";
import getMesinById from "../../services/master/mesin/getMesinById.js";
import updateData from "../../services/master/mesin/updateMachine.js";

const createMasterMesin = async (req, res) => {
  const mesinEksis = await cariMesin(req.body.machineName);
  if(typeof mesinEksis !== 'object') return res.status(500).json({errors: mesinEksis});
  if(mesinEksis) return res.status(403).json({errors: `Maaf, nama mesin ${req.body.machineName} sudah terdaftar !`});

  const mesinBaru = await createMesin(req.body.machineName);
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

const updateMachine = async (req, res) => {
  const id = req.params.id;
  const mesinEksis = await cariMesinKecuali(id, req.body.machineName);
  if(typeof mesinEksis !== 'object') return res.status(500).json({errors: mesinEksis});
  if(mesinEksis) return res.status(403).json({errors: `Maaf, nama mesin ${req.body.machineName} sudah terdaftar !`});
  
  const result = await updateData(id, req.body.machineName);
  if(result.nama_mesin) {
    return res.status(200).json({message: 'Berhasil merubah master mesin'});
  } else {
    return res.status(500).json({errors: `Terjadi kesalahan<br /> ${result}`});
  }
}

export {
  createMasterMesin,
  getAllMasterMesin,
  getUniqueMesin,
  updateMachine
}