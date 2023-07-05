import {Router} from "express";
import { uploader } from "../utils.js";

const router = Router();

let users=[];

//rutas usuarios
router.get("/",(req,res)=>{
    res.json({status:"success", data:users});
});

//single para subir un unico archivo
//file hace referencia al campo que se utiliza en la peticion para subir el archivo
router.post("/", uploader.single("file") ,(req,res)=>{
    const newUser = req.body;
    newUser.fileInfo=req.file;
    console.log("newUser: ", newUser);
    users.push(newUser);
    res.json({status:"success",message:"usuario creado"});
});


export {router as UserRouter}