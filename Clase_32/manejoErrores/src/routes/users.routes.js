import { Router } from "express";
import { CustomError } from "../services/error/customError.service.js";//estructura standard del error
import { EError } from "../enums/EError.js";//tipos de errores
import { generateUserErrorInfo } from "../services/error/userErrorInfo.service.js";//mensaje personalizado del error
import { generateUserErrorParams } from "../services/error/userErrorParams.service.js";

const router = Router();

let users = [];

router.get("/",(req,res)=>{
    res.json({status:"success", data:users});
});

router.post("/",(req,res)=>{
    const {name,lastname,email} = req.body;
    if(!name || !lastname || !email){
        //generamos el error estandarizado
        CustomError.createError({
            name:"Error al crear el usuario",
            cause:generateUserErrorInfo(req.body),
            message:"Hubo un error al crear el usuario",
            errorCode:EError.INVALID_JSON
        });
    }

    //creacion del usuario
    const newUser = req.body;
    if(users.length>0){
        newUser.id = users.length++
    } else {
        newUser.id=1;
    };
    users.push(newUser);
    res.json({status:"success", message:"usuario creado", data:newUser});
});

router.get("/:uid",(req,res)=>{
    const uid = req.params.uid;
    const userId = parseInt(uid);//"2"=>2 "palabra"=>NaN
    if(Number.isNaN(userId)){
        CustomError.createError({
            name:"Error id del usuario",
            cause: generateUserErrorParams(uid),
            message:"Error obteniendo el usuario",
            errorCode: EError.IVALID_PARAMS
        });
    }

    //si el dato del parametro es valido
    res.json({message:"usuario encontrado"});
});

export { router as usersRouter};