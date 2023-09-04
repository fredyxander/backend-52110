import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { swaggerSpecs } from './config/swaggerConfig.js';
import swaggerUI from "swagger-ui-express";
import { config } from './config/config.js';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();
const PORT = config.server.port;
const connection = mongoose.connect(config.mongo.url);

app.use(express.json());
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("bienvenido");
});
app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
//definir ruta donde podremos ver la documentacion de los endpoints
app.use("/documentation",swaggerUI.serve,swaggerUI.setup(swaggerSpecs));

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))

export {app}