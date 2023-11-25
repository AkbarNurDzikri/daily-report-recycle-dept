import express from 'express';
import { createMasterMesin, getAllMasterMesin, getUniqueMesin, updateMachine } from '../controllers/master/controllerMasterMesin.js';

const routerMesin = express.Router();
routerMesin.post('/master/machine', createMasterMesin);
routerMesin.get('/master/mesin', getAllMasterMesin);
routerMesin.get('/master/machine/:id', getUniqueMesin);
routerMesin.patch('/master/machine/:id', updateMachine);

export default routerMesin;