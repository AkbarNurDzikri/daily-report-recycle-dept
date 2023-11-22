import controllerPendaftaran from "../controllers/pengguna/controllerPendaftaran.js";
import express from 'express';

const routerPengguna = express.Router();

routerPengguna.post('/pengguna/daftar', controllerPendaftaran);

export default routerPengguna;