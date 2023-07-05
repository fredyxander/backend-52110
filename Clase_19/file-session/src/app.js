import express from "express";
import session from "express-session";//gestionar sesiones
import FileStore from "session-file-store"; //almacenar sesiones en archivos

import { __dirname } from "./utils.js";
import path from "path";

const port = 8080;
const app =express();

//conectar el modulo session con fileStore
const fileStorage = FileStore(session);

app.listen(port,()=>console.log(`Server listening on port ${port}`));

//configuracion de session
app.use(session({
    store:new fileStorage({
        ttl:10,//sesion activa por 60 segundos
        retries:0,
        path:path.join(__dirname,"/sessions"),//ruta de la carpeta donde almacenamos las sesiones
    }),
    secret:"claveSecreta",
    resave:true,
    saveUninitialized:true
}));

//routes
app.get("/login",(req,res)=>{
    const {name} = req.query;
    console.log("sesion actual", req.session);
    req.session.user=name;
    res.send("sesion creada");
});