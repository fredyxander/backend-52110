import express from "express";

const app = express();

const port = 8080;

app.get("/",(request,response)=>{
    response.send("Bienvenivo a un servidor de express");
});

app.get("/bienvenido",(req,res)=>{
    res.send(`<p style="color:blue;">Bienvenida coder</p>`)
});

app.get("/usuario",(req,res)=>{
    res.send({nombre:"pepe",apellido:"perez", curso:"coder"});
});

app.listen(port,()=>console.log(`Server listening on port ${port}`));