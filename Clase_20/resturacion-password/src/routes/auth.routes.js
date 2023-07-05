import { Router } from "express";
import { userModel } from "../models/users.model.js";
import { createHash, isValidPassword } from "../utils.js";

const router = Router();

//ruta para registrar el usuario
router.post("/signup", async(req,res)=>{
    try {
        const userForm = req.body;
        //buscamos el usuario en la base de datos por el correo
        const user = await userModel.findOne({email:userForm.email});
        if(!user){
            //si no existe el usuario, registramos el usuario
            const newUser = {
                first_name:userForm.first_name,
                last_name: userForm.last_name,
                age: userForm.age,
                email: userForm.email,
                password:createHash(userForm.password), //hjags876123jhags8
            }
            const userCreated = await userModel.create(newUser);
            res.send('<div>usuario registrado, <a href="/login">ir al login</a></div>');
        } else {
            res.send('<div>usuario ya registrado, <a href="/signup">intente de nuevo</a></div>');
        }
    } catch (error) {
        res.send('<div>Hubo un error al registrar el usuario, <a href="/signup">intente de nuevo</a></div>')
    }
});

//ruta para loguear el usuario
router.post("/login", async(req,res)=>{
    try {
        const userLoginForm = req.body;
        //buscamos el usuario en la base de datos por el correo
        const userDB = await userModel.findOne({email:userLoginForm.email});
        if(userDB){
            //si existe el usuario, verificamos la contraseña del usuario
            if(isValidPassword(userLoginForm.password,userDB)){
                //una validamos credenciales, creamos la sesion del usuario
                req.session.user={first_name:userDB.first_name, last_name:userDB.last_name, email:userDB.email};
                res.redirect("/profile");
            } else {
                res.send('<div>credenciales invalidas, <a href="/login">intente de nuevo</ahref=></div>');
            }
        } else {
            //si no esta registrado
            res.send('<div>usuario no registrado, <a href="/signup">registrarse</a> o <a href="/login">intente de nuevo</a></div>');
        }
    } catch (error) {
        res.send('<div>Hubo un error al loguear el usuario, <a href="/login">intente de nuevo</a></div>')
    }
});

//ruta para restaurar la contraseña del usuario
router.post("/forgot", async(req,res)=>{
    try {
        const {email, newPassword} = req.body;
        console.log("newPassword",newPassword)
        const userDB = await userModel.findOne({email:email});
        if(userDB){
            //si el usuario esta registrado, restauramos la contraseña
            userDB.password = createHash(newPassword);
            const userUpdated = await userModel.findByIdAndUpdate(userDB._id, userDB , {new:true});
            res.send('<div>contraseña actualizada, <a href="/login">ir al login</a></div>');
        } else {
            res.send('<div>usuario no registrado, <a href="/signup">registrarse</a> o <a href="/forgot">intente de nuevo</a></div>');
        }
    } catch (error) {
        console.log(error.message)
        res.send('<div>Hubo un error al restaurar la contraseña, <a href="/forgot">intente de nuevo</a></div>')
    }
})

//ruta cerrar sesion
router.get("/logout",(req,res)=>{
    req.session.destroy(err=>{
        if(err) return res.send('no se pudo cerrar sesion, <a href="/profile">ir al perfil</a>');
        res.redirect("/")
    });
});

export {router as authRouter};