import express from "express";
import {fork} from "child_process";
import { __dirname } from "./utils.js";
import path from "path";

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`Server listeining on port ${port}`));

app.get("/",(req,res)=>{
    res.send("bienvenidos")
});

app.get("/suma",(req,res)=>{
    const child = fork(path.join(__dirname,"/process/childProcess.js"));//creamos el proceso hijo
    child.send("start"); //damos inicio al proceso hijo
    child.on("message",(result)=>{
        res.send(`La suma es ${result}`);
    });
});