import {Router} from "express";

//Contruimos un grupo de rutas
const router = Router();

let users=[];

//ruta principal:/api/users

//definir las rutas de usuarios
//GET http://lcoalhost:8080/api/users/ =>/api/users
router.get("/",(req,res)=>{
    res.json({status:"success", data:users});
});

//ruta para crear usuario
router.post("/",(req,res)=>{
    const newUser = req.body;
    console.log("newUser: ", newUser);
    users.push(newUser);
    res.json({status:"success",message:"usuario creado"});
});


export {router as UserRouter}