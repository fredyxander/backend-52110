import { UsersService } from "../services/users.service.js";

export const getUsers = async(req,res)=>{
    try {
        const users = await UsersService.getUsers();
        res.json({status:"success", data:users});
    } catch (error) {
        console.log("get users error", error.message);
        res.json({status:"error", message:"No se pudieron obtener los usuarios"})
    }
};

export const getUserById = async(req,res)=>{
    try {
        const userId = req.params.uid;
        const user = await UsersService.getUser(userId);
        res.json({status:"success", data:user});
    } catch (error) {
        console.log("getUserById error", error.message);
        res.json({status:"error", message:"No se pudo obtener el usuarios"})
    }
};

export const saveUser = async(req,res)=>{
    try {
        const userInfo = req.body;
        const userCreated = await UsersService.createUser(userInfo);
        res.json({status:"success", data:userCreated});
    } catch (error) {
        console.log("saveUser error", error.message);
        res.json({status:"error", message:"No se pudo crear el usuario"})
    }
};