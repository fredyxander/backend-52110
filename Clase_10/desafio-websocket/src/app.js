import express from "express";
import {Server} from "socket.io";
import handlebars from "express-handlebars";
import { viewsRouter } from "./routes/views.routes.js";
import { __dirname } from "./utils.js";
import path from "path";

//configuracion del servidor http
const app = express();
const port = 8080;

//middleware
app.use(express.static(path.join(__dirname,"/public")));

//servidor http
const httpServer = app.listen(port,()=>console.log(`Server listening on port ${port}`));

//servidor de websocket
const socketServer = new Server(httpServer);

//configuracion del motor de plantillas
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

//routes
app.use(viewsRouter);

let messages = [];
socketServer.on("connection",(socket)=>{
    console.log(`nuevo socket cliente conectado ${socket.id}`);
    //emitir el mensaje al socket actual
    socket.emit("chatMessages",messages);

    socket.on("message",(data)=>{
        messages.push({socketId:socket.id, message:data});
        //emitir el mensaje a todos los clientes conectados
        socketServer.emit("chatMessages",messages);
    });
});