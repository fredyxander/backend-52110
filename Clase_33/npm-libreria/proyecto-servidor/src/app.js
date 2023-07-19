import express from "express";
import {sumar,multiplicar,restar,dividir, potencia} from "operaciones-coder-pepe";

const port = 8080;
const app = express();

app.listen(port,()=>console.log('Server ok'));

app.get("/operacionSuma",(req,res)=>{
    const {num1,num2} = req.query;
    const result = sumar(parseInt(num1), parseInt(num2));
    res.json({status:"success", message:`La suma es ${result}`});
});