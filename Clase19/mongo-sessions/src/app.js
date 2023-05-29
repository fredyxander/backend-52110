import express from "express";
import session from "express-session";//gestionar sesiones
import MongoStore from "connect-mongo";


import { __dirname } from "./utils.js";
import path from "path";

const port = 8080;
const app =express();


app.listen(port,()=>console.log(`Server listening on port ${port}`));

//configuracion de session
app.use(session({
    store: MongoStore.create({
        mongoUrl:"TU RUTA DE LA BASE DE DATOS",
        ttl:20
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