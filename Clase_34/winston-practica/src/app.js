import express from "express";
import { addLogger } from "./utils/logger.js";

const port = 8080;
const app = express();

//middleware
app.use(addLogger);

app.listen(port,()=>console.log(`Server ok`));

app.get("/",(req,res)=>{
    res.send("hola a todos!")
});

app.get("/user",(req,res)=>{
    req.logger.warn("mensaje de advertencia");
    res.send("usuario pepito");
});