import express from 'express';
import controllerMasterMesin from '../controllers/master/controllerMasterMesin.js';

const routerMesin = express.Router();
routerMesin.post('/master/mesin', controllerMasterMesin);

export default routerMesin;