import { productsModel } from "../daos/models/products.model.js";
import mongoose from "mongoose";
import { config } from "../config/config.js";

await mongoose.connect(config.mongo.url);
//funcion para actualizar todos los productos de la base de datos
const updateProducts = async()=>{
    try {
        // const products = await productsModel.find();
        // console.log("products", products);
        const adminId="64a82332cf744a052c2e86a7";//ID DE ADMIN
        const result = await productsModel.updateMany({},{$set:{owner:adminId}});
        console.log("result", result);
    } catch (error) {
        console.log(error.message);
    }
}
updateProducts();