import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import routerPengguna from '../routes/routerPengguna.js';
import routerOtentifikasi from '../routes/routerOtentifikasi.js';
import routerMesin from '../routes/routerMesin.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use(routerPengguna);
app.use(routerOtentifikasi);
app.use(routerMesin);

export default app;