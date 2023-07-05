import express from "express";
import {ProductManager} from "./Productmanager.js";

const app =express();

const manager = new ProductManager();

app.get("/products",async(req,res)=>{
    const users = await manager.getProducts();
    resizeBy.send(users);
});