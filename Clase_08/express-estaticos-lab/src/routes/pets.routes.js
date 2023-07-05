import {Router} from "express";

const router = Router();

let pets = [];

//rutas de mascotas
router.get("/",(req,res)=>{
    res.json({status:"success", data:pets});
});

//ruta para crear usuario
router.post("/",(req,res)=>{
    const newPet = req.body;
    console.log("newPet: ", newPet);
    pets.push(newPet);
    res.json({status:"success",message:"mascota creada"});
});

export {router as PetRouter}