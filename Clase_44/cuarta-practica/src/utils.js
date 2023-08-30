import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from "bcrypt";
export const __dirname = path.dirname(fileURLToPath(import.meta.url));
import jwt from "jsonwebtoken";
import { config } from "./config/config.js";
import multer from "multer";

export const createHash = (password)=>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync());
};

export const validPassword = (password,user)=>{
    return bcrypt.compareSync(password,user.password);
};

export const verifyEmailToken = (token)=>{
    try {
        const info = jwt.verify(token,config.server.secretToken);
        return info.email;
    } catch (error) {
        return null;
    }
};

//definir storages de multer
//funcion para validar los campos del registro de un usuario
const checkfields = (body)=>{
    const {first_name,email,password} = body;
    if(!first_name || !email || !password){
        return false;
    } else {
        return true;
    }
};
//funcion para filtrar los datos, antes de guardar la imagen
const multerProfilefilter = (req,file,cb)=>{
    const validFields = checkfields(req.body);
    if(!validFields){
        cb(null, false);
    } else {
        cb(null, true);
    }
}

//configuracion de donde guardar las imagenes del perfil de los usuarios
const profileStorage = multer.diskStorage({
    //donde voy a guardar los archivos
    destination: function(req,file,cb){
        cb(null,path.join(__dirname,"/multer/users/images"))
    },
    // con que nombre guardaremos el archivo
    filename:function(req,file,cb){
        cb(null,`${req.body.email}-perfil-${file.originalname}`) //pepe@gmail.com-perfil-avatar.png
    }
});
//crear el uploader
export const uploadProfile = multer({storage:profileStorage, fileFilter:multerProfilefilter});


//configuración de donde guardar los documentos de los usuarios
const userDocsStorage = multer.diskStorage({
    //donde voy a guardar los archivos
    destination: function(req,file,cb){
        cb(null,path.join(__dirname,"/multer/users/documents"))
    },
    // con que nombre guardaremos el archivo
    filename:function(req,file,cb){
        cb(null,`${req.user.email}-documento-${file.originalname}`)
    }
});
//crear el uploader
export const uploadUserDoc = multer({storage:userDocsStorage});


//configuración de donde guardar las imagenes de los productos
const imgProductStorage = multer.diskStorage({
    //donde voy a guardar los archivos
    destination: function(req,file,cb){
        cb(null,path.join(__dirname,"/multer/products/images"))
    },
    // con que nombre guardaremos el archivo
    filename:function(req,file,cb){
        cb(null,`${req.body.code}-imgProducto-${file.originalname}`)
    }
});
//crear el uploader
export const uploadImgProduct = multer({storage:imgProductStorage});
