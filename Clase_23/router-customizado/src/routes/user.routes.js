import { AppRouter } from "./app.router.js";
import jwt from "jsonwebtoken";

class UserRouter extends AppRouter{
    init(){
        //rutas de userRouter
        // this.get("/",(req,res)=>{
        //     // res.send("bienvenidos router personalizado");
        //     res.sendSuccess("bienvenidos router personalizado");
        // });

        // this.get("/error",(req,res)=>{
        //     // res.send("bienvenidos router personalizado");
        //     res.sendClientError(new Error("el usuario no existe"));
        // });

        this.post("/login",["PUBLIC"],(req,res)=>{
            const newUser = {
                email:req.body.email,
                role:req.body.role
            };
            const token = jwt.sign(newUser,"ClaveSecretaToken");
            res.sendSuccess(token);
        });

        //ruta solo para administradores
        this.get("/eliminarUsuario",["ADMIN"],(req,res)=>{
            res.sendSuccess("Ahora puedes eliminar un usuario");
        });

        //ruta solo para usuarios
        this.get("/comprarProducto",["USER","USER_PREMIUM"],(req,res)=>{
            res.sendSuccess("Ahora puedes comprar un producto");
        });
    }
};

export {UserRouter};