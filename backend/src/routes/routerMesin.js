import express from 'express';
import { createMasterMesin, getAllMasterMesin, getUniqueMesin } from '../controllers/master/controllerMasterMesin.js';

const routerMesin = express.Router();
routerMesin.post('/master/mesin', createMasterMesin);
routerMesin.get('/master/mesin', getAllMasterMesin);
routerMesin.get('/master/mesin/:id', getUniqueMesin);

export default routerMesin;