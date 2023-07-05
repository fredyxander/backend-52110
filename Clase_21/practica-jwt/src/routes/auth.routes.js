import { Router } from "express";
import { generateToken, validateToken } from "../utils.js";

const router = Router();

const users = [];
router.post("/signup",(req,res)=>{
    const userForm = req.body;
    const user = users.some(u=>u.email === userForm.email);
    if(user){
        res.send("usuario ya registrado")
    } else {
        users.push(userForm);
        res.send("usuario registrado correctamente");
    }
});

router.post("/login",(req,res)=>{
    const userLoginForm = req.body;
    const user = users.find(u=>u.email === userLoginForm.email);
    if(user){
        if(user.password === userLoginForm.password){
            // /validamos las credenciales del usuario
            const accessToken = generateToken({email:user.email});
            res.send({status:"sucsess", accessToken});
        } else {
            res.send("credenciales invalidas")
        }
    } else {
        res.send("usuario no registrado");
    }
});

router.get("/profile", validateToken , (req,res)=>{
    res.send(`Bienvenido ${req.user.email}`)
})

export {router as sessionRouter};