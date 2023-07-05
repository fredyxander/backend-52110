//importaciones de la capa de servicio
import { getToysService, saveToyService } from "../negocio/toys.service.js";

export const welcomeToys = (req,res)=>{
    res.send("bienvenido gestion juguetes");
};

export const getToysController = (req,res)=>{
    const result = getToysService();
    res.json({status:"success", data:result});
};

export const saveToyController = (req,res)=>{
    const result = saveToyService(req.body);
    res.send({status:"success", data:result});
};