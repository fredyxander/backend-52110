import { Router } from "express";

{/* <a href="/">Home</a>
<a href="/login">Login</a>
<a href="/signup">Registro</a>
<a href="/profile" >Perfil</a> */}

const router = Router();

router.get("/",(req,res)=>{
    res.render("home");
});

router.get("/login",(req,res)=>{
    res.render("login");
});

router.get("/signup",(req,res)=>{
    res.render("signup");
});

router.get("/profile",(req,res)=>{
    console.log(req.user);
    res.render("profile",{user:req.user});
});

router.get("/current",(req,res)=>{
    console.log(req.user);
    res.render("profile",{user:req.user});
});

export {router as viewsRouter};