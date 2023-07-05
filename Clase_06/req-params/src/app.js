import express from "express";

const app = express();

const port = 8080;

const usuarios = [
    {id:1,nombre:"pepe", apellido:"perez", curso:"javascript"},
    {id:2,nombre:"ana", apellido:"Lobo", curso:"html"},
    {id:3,nombre:"juan", apellido:"Gomez", curso:"node"},
];

// app.get("/usuario/pepe",(req,res)=>{
//     res.send(usuarios[0])
// });

// app.get("/usuario/juan",(req,res)=>{
//     res.send(usuarios[2])
// });

// http://localhost:8080/usuario/pepe
// http://localhost:8080/usuario/juan
// http://localhost:8080/usuario/ana
// http://localhost:8080/usuario/luis
app.get("/usuario/:cualquierNombre",(req,res)=>{
    const nombre = req.params.cualquierNombre;
    const user = usuarios.find(u=>u.nombre === nombre);
    res.send(user);
});

app.listen(port,()=>console.log(`Server listening on port ${port}`));