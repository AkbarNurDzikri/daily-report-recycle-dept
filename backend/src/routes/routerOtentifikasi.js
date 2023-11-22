import express from 'express';
import controllerLogin from '../controllers/otentifikasi/controllerLogin.js';

const routerOtentifikasi = express.Router();
routerOtentifikasi.post('/auth/login', controllerLogin);
export default routerOtentifikasi;