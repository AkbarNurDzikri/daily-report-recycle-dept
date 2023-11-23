import express from 'express';
import { createMasterMesin, getAllMasterMesin } from '../controllers/master/controllerMasterMesin.js';

const routerMesin = express.Router();
routerMesin.post('/master/mesin', createMasterMesin);
routerMesin.get('/master/mesin', getAllMasterMesin);

export default routerMesin;