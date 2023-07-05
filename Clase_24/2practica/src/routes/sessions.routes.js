import { Router } from "express";
import passport from "passport";

const router = Router();

router.post("/signup", passport.authenticate("signupStrategy",{
    failureRedirect:"/api/sessions/failed-signup"
}), (req,res)=>{
    res.render("login",{message:"Usuario registrado correctamente"});
});

router.get("/failed-signup",(req,res)=>{
    res.send("<p>Hubo un error al registrar al usuario <a href='/signup'>Intente de nuevo</a></p>");
});

router.post("/login", passport.authenticate("loginStrategy",{
    failureRedirect:"/api/sessions/failed-login"
}), (req,res)=>{
    res.redirect("/profile");
});

router.get("/failed-login",(req,res)=>{
    res.send("<p>Hubo un error al iniciar sesion <a href='/login'>Intente de nuevo</a></p>");
});

export {router as sessionsRouter};