import express from "express";
import { __dirname } from "./utils.js";
import path from "path";
//importamos los routers
import {UserRouter} from "./routes/user.routes.js";
import { PetRouter } from "./routes/pets.routes.js";

const app = express();
const port = 8080;

app.listen(port,()=>console.log(`Server listening on port ${port}`));

app.use(express.json());//intepretar el formato json del cuerpo de las peticiones.
app.use(express.urlencoded({extended:true})); //interpreta formato json de un formulario
app.use(express.static(path.join(__dirname,"/public")));

//routes
///que ruta principal vamos a utilizar para acceder a las rutas de los usuarios.
app.use("/api/users", UserRouter);
app.use("/api/pets", PetRouter);