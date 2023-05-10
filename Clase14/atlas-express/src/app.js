import express from "express";
import { userRouter } from "./routes/user.routes.js";
import mongoose from "mongoose";

const port= 8080;
const app = express();

//middlewares
app.use(express.json());

app.listen(port,()=>console.log(`Server listening on port ${port}`));

//crear la conexion a la base de datos
try {
    await mongoose.connect("AGREGA TU RUTA DE BASE DE DATOS");
    console.log("base de datos conectada")
} catch (error) {
    console.log(`Hubo un error al conectar la base de datos: ${error.message}`);
}

//routes
app.use("/api/users",userRouter);