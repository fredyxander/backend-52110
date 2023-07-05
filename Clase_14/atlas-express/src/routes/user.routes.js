import { Router } from "express";
import { userModel } from "../models/user.model.js";

const router = Router();

router.get("/", async(req,res)=>{
    try {
        const users = await userModel.find(); //db.users.find()
        res.json({status:"success", data:users});
    } catch (error) {
        console.log(error.message);
        res.json({status:"error",message:"No se pudieron obtener los usuarios"});
    }
});

//ruta de crear el usuario
router.post("/",async(req,res)=>{
    try {
        const user = req.body;
        //validaciones de los campos
        if(!user.first_name || !user.email || !user.password){
            return  res.json({status:"error", message:"los campos son invalidos"});
        }
        const userCreated = await userModel.create(req.body);
        res.json({status:"success", data:userCreated});
    } catch (error) {
        console.log(error.message);
        res.json({status:"error",message:"No se pudo crear el usuario"});
    }
});

router.put("/:uid",async(req,res)=>{
    try {
        const userId = req.params.uid;
        const user = req.body;
        //validaciones de los campos
        if(!user.first_name || !user.email || !user.password){
            return  res.json({status:"error", message:"los campos son invalidos"});
        }
        const userUpdate = await userModel.findByIdAndUpdate(userId,user,{new:true});
        res.json({status:"success", data:userUpdate});
    } catch (error) {
        console.log(error.message);
        res.json({status:"error",message:"No se pudo actualizar el usuario"});
    }
});


router.delete("/:uid", async(req,res)=>{
    try {
        const userId = req.params.uid;
        // const result = await userModel.findByIdAndDelete(userId);
        // console.log(result)
        // if(!result){
        //     return res.json({status:"error", message:"no se pudo eliminar el usuario"})
        // }
        const result = await userModel.deleteOne({_id:userId});
        if(result.deletedCount ===0){
            return res.json({status:"error", message:"no se pudo eliminar el usuario"})
        }
        res.json({status:"sucess", message:"usuario eliminado"});
    } catch (error) {
        console.log(error.message);
        res.json({status:"error",message:"No se pudo eliminar el usuario el usuario"});
    }
})

export {router as userRouter}