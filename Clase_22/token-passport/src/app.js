import express from "express";
import path from "path";
import { __dirname } from "./utils.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { initializePassport } from "./config/passport.config.js";
import passport from "passport";

const port = 8080;
const app =express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")));
app.use(cookieParser());

//configuracion de passport
initializePassport();
app.use(passport.initialize());

app.listen(port,()=>console.log('Server ok'));


//routes
const PRIVATE_KEY_TOKEN = "claveSecretaToken";

let userTest = {email:"pepe@gmail.com", password:"1234"};

app.post("/login",(req,res)=>{
    const {email, password} = req.body;
    if(email === userTest.email){
        if(password === userTest.password){
            //generamos el token
            const token = jwt.sign({email},PRIVATE_KEY_TOKEN,{expiresIn:"24h"});
            res.cookie("cookie-token",token,{httpOnly:true}).json({status:"success"});
        } else {
            res.status(401).json({status:"error", message:"credenciales invalidas"});
        }
    } else {
        res.status(401).json({status:"error", message:"usuario no encontrado"});
    }
});

app.get("/privada", passport.authenticate("jwt",{
    session:false,
    failureRedirect:"/failed-login"
}) ,(req,res)=>{
    res.json({status:"success", message:`bienvenido ${req.user.email}`});
});

app.get("/failed-login",(req,res)=>{
    res.json({status:"error", message:"autenticacion invalida"})
});