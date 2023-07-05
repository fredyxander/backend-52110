import express from "express";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
import path from "path";
import { viewsRouter } from "./routes/views.routes.js";
import { userRouter } from "./routes/users.routes.js";

const app = express();
const port = 8080;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")));

app.listen(port,()=>console.log(`Servidor ejecutandose en el puerto ${port}`));

//configuracion del motor de plantillas
app.engine("handlebars",handlebars.engine());//inicializando handlebars
app.set("views",path.join(__dirname,"/views"))//indicamos la ruta del almacenamiento de las vistas
app.set("view engine","handlebars");


//routes
app.use(viewsRouter);
app.use("/api",userRouter);








//importacion y exportacion
// export {variable}   =>    import {variable} from "./archivo.js";
// export const variable    =>   import {variable} from "./archivo.js";
// export default variable   =>   import loquesea from "./archivo.js";
// export default Variable   =>   import variable from "./archivo.js"