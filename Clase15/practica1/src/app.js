import express from "express";
import path from "path";
import {engine} from "express-handlebars";
import {Server} from "socket.io";

import { __dirname } from "./utils.js";
import { productsRouter } from "./routes/products.routes.js";
import { cartsRouter } from "./routes/carts.routes.js";
import { viewsRouter } from "./routes/views.routes.js";
import { connectDB } from "./config/dbConnection.js";
import {ChatMongo} from "./dao/managers/chat.mongo.js";


const app = express();
const port = 8080;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")));

const httpServer = app.listen(port,()=>console.log(`Server listening on port ${port}`));
const io = new Server(httpServer);

//configuracion handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

//conexion a la base de datos
connectDB();

//routes
app.use(viewsRouter);
app.use("/api/products",productsRouter);
app.use("/api/carts",cartsRouter);

//configuracion del chat
const chatService = new ChatMongo();
io.on("connection",async(socket)=>{
    const messages = await chatService.getMessages();
    io.emit("msgHistory", messages);

    //recibir el mensaje del cliente
    socket.on("message",async(data)=>{
        await chatService.addMessage(data);
        const messages = await chatService.getMessages();
        io.emit("msgHistory", messages);
    });
});