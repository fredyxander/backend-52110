import {Router} from "express";

const router = Router();

let users=[];

router.post("/user",(req,res)=>{
    const newUser = req.body;
    users.push(newUser);
    res.redirect("/registro");
});

router.get("/users",(req,res)=>{
    res.send(users);
});

export {router as userRouter};