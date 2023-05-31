import { Router } from "express";

const router = Router();

{/* <a href="/">Inicio</a>
<a href="/login">Login</a>
<a href="/signup">Registro</a>
<a href="/profile">Perfil</a> */}

//rutas de las vistas
router.get("/", (req,res)=>{
    res.render("home");
});

router.get("/login", (req,res)=>{
    res.render("login");
});

router.get("/signup", (req,res)=>{
    res.render("registro");
});

router.get("/profile", (req,res)=>{
    console.log(req.session.user)
    res.render("perfil",{email:req.session.user.email});
});

export { router as viewsRouter};