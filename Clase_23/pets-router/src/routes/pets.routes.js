import { Router } from "express";

const router = Router();

const pets = [];

//midleware solo aplicado a petsRouter, para validar el valor que contiene el parametro
router.param("pet",(req,res,next,petName)=>{
    const expressionRegular = /^[a-zA-Z\s]+$/;
    if(expressionRegular.test(petName)){
        const pet = pets.find(p=>p.name === petName);
        if(pet){
            req.pet=pet
        } else {
            req.pet=null
        }
        next();
    } else {
        res.json({status:"error", message:"El valor del parametro no es valido"})
    }
});

router.post("/",(req,res)=>{
    const newPet = req.body;
    pets.push(newPet);
    res.json({status:"success", message:"mascota agregada"});
});

router.get("/:pet",(req,res)=>{
    //const petName = req.params.pet
    //consultar si la mascota existe
    if(req.pet){
        res.json({status:"success",data:req.pet})
    } else {
        res.json({status:"error", message:"la mascota no existe"})
    }
});

router.put("/:pet",(req,res)=>{
    //const petName = req.params.pet
    //consultar si la mascota existe
    if(req.pet){
        const pet = req.pet;
        pet.adopted=true;
        res.json({status:"success",data:pet});
    } else {
        res.json({status:"error", message:"la mascota no existe"})
    }
});

export {router as petsRouter};