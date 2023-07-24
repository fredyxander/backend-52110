import express from "express";

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`Server ok`));

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