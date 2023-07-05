import express from "express";
import { ordersModel } from "./models/orders.model.js";
import mongoose from "mongoose";

const port = 8080;
const app =express();

app.listen(port,()=>console.log(`Server listening on port ${port}`));

try {
    await mongoose.connect("RUTA BASE DE DATOS")
} catch (error) {
    console.log(error.message)
}

let orders = [
    {name:'Peperoni',size:'small',price:19,quantity:10,dat:'2021-03-13T08:14:30Z'},
    {name:'Peperoni',size:'medium',price:20,quantity:20,dat:'2021-03-13T09:13:24Z'},
    {name:'Peperoni',size:'medium',price:20,quantity:20,dat:'2021-05-13T09:13:24Z'},
    {name:'Peperoni',size:'large',price:21,quantity:30,dat:'2021-03-17T09:22:12Z'},
    {name:'Cheese',size:'small',price:12,quantity:15,dat:'2021-03-13T11:21:39.736Z'},
    {name:'Cheese',size:'medium',price:13,quantity:50,dat:'2022-01-12T21:23:13.331Z'},
    {name:'Cheese',size:'large',price:14,quantity:10,dat:'2022-01-12T05:08:13Z'},
    {name:'Vegan',size:'small',price:17,quantity:10,dat:'2021-01-13T05:08:13Z'},
    {name:'Vegan',size:'medium',price:18,quantity:10,dat:'2021-01-13T05:10:13Z'},
    {name:'Vegan',size:'medium',price:18,quantity:10,dat:'2022-01-13T05:10:13Z'},
];

const operations = async()=>{
    // const result = await ordersModel.insertMany(orders);
    // console.log("result", result);

    const result = await ordersModel.aggregate([
        //primer etapa: $match, filtrar las pizas de tamaño medium
        {
            $match:{size:"medium"}
        },
        //segunda estapa: Agrupar las pizzas por sabor(propiedad: name), y luego a cada grupo le agregamos una propiedad "quantity"
        {
            $group:{
                _id:"$name",
                totalQuantity:{$sum:"$quantity"}
            }
        },
        //tercera etapa
        {
            $sort:{totalQuantity:-1}
        },
        //cuarta etapa, crear el documento que vamos a guardar en la coleccion reports,
        //$push: va agregando elementos dentro de un arreglo.
        //$$ROOT: hace referencia a todo el documento en su totalidad
        {
            $group:{
                _id:1,
                orders:{$push:"$$ROOT"}
            }
        },
        //quinta etapa: con el documento creado anteriormente, lo guardamos en una nueva colleccion en la base de datos
        {
            $merge:{
                into:"reports"
            }
        }
    ]);
    console.log("result", result);

    await mongoose.connection.close();
}

operations();