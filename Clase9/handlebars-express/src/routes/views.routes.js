import {Router} from "express";

const router = Router();

router.get("/",(req,res)=>{
    const user1 = {nombre:"pepe",curso:"nodejs"};
    const user2 = {nombre:"juan",curso:"html"};
    res.render("home",user2);
});

export {router as viewsRouter};