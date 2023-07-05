import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await mongoose.connect("TU RUTA DE BASE DE DATOS");
        console.log("conectado a la base de datos");
    } catch (error) {
        console.log(`Error conectando la base de datos ${error.message}`);
    }
}