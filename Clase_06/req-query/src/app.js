import express from "express";

const app = express();

const port = 8080;

const usuarios = [
    {id:1,nombre:"pepe", apellido:"perez", curso:"javascript",edad:13},
    {id:2,nombre:"ana", apellido:"Lobo", curso:"html", edad:18},
    {id:3,nombre:"juan", apellido:"Gomez", curso:"node", edad:21},
    {id:4,nombre:"luis", apellido:"Gomez", curso:"node", edad:24},
];

//http://localhost:8080?variable1=valor1&varaible2=valor2&variable3=valor3
//http://localhost:8080/usuario?genero=femenino&edad=18&curso=node
app.get("/usuario",(req,res)=>{
    console.log(req.query)
    const curso = req.query.curso;
    //que pasa si en la solicitud no recibo el parametro
    if(!req.query.edad){
        return res.send("No se pudo procesar su solicitud");
    }
    const edad = parseInt(req.query.edad);
    console.log("req.query.edad",req.query.edad, "edad: ", edad )
    // const users = usuarios.filter(u=>u.curso === curso);
    //filtro por edad
    const users = usuarios.filter(u=>u.edad>=edad);
    res.send(users);
});

app.listen(port,()=>console.log(`Server listening on port ${port}`));