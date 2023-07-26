import express from "express";
import cluster from "cluster";
import os from "os";

const numCores = os.cpus().length;
// console.log("numCores",numCores);

const port = 8080;
const app = express();

if(cluster.isPrimary){
    //comenzamos a crear nuestros procesos secundarios
    //crear proceso secundario por nucleo o core
    for(let i=0;i<numCores;i++){
        cluster.fork();
    }
    cluster.on("exit",(worker)=>{//worker es el proceso que deja de funcionar
        console.log(`Este proceso dejo de funcionar ${worker.process.pid}`);
        cluster.fork();
    })
} else {
    //proceso secundario "copia del servidor" ejecutando la aplicacion
    app.listen(port,()=>console.log(`Server secundario ${process.pid}`));

    app.get("/",(req,res)=>{
        res.send(`server con cluster desde proceso ${process.pid}`);
    });

    app.get("/sencilla",(req,res)=>{
        let sum = 0;
        for(let i=0;i<10000;i++){
            sum += i
        };
        res.send(`La suma es ${sum}`);
    });

    app.get("/compleja",(req,res)=>{
        let sum = 0;
        for(let i=0;i<5e7;i++){//5e7=>50.000.000
            sum += i
        };
        res.send(`La suma es ${sum}`);
    });
}