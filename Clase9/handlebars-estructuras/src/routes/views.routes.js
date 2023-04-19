import {Router} from "express";

const router = Router();

const food = [
    {name:"Hamburguesa",price:120},
    {name:"Ensalada",price:80},
    {name:"Pizza",price:100},
    {name:"HotDog",price:120},
];

router.get("/",(req,res)=>{
    const user ={nombre:"pepe",role:"admin"};
    const objectInfo = {
        user,
        isAdmin: user.role === "admin" ? true : false,
        food
    }
    res.render("home",objectInfo);
});

router.get("/contacto",(req,res)=>{
    res.render("contact");
});

export {router as viewsRouter};