import express from "express";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
import path from "path";
import { viewRouter } from "./routes/views.routes.js";
import {Server} from "socket.io";
import {ChatFilesManager} from "./manager/chatFilesManager.js";

const chatManager = new ChatFilesManager("chat.json");
console.log(chatManager);

const app = express();
const port = process.env.PORT || 8080;

const httpServer = app.listen(port,()=>console.log(`Server on listening on port ${port}`));

//servidor de websocket
const io = new Server(httpServer);

//middlewares
app.use(express.static(path.join(__dirname,"/public")));

//configuración de handlebars
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

//routes
app.use(viewRouter);

// let messages = [];
//funcion principal del servidor websocket
io.on("connection", async(socket)=>{
    console.log(`Nuevo cliente conectado ${socket.id}`);
    socket.on("authenticated", async(data)=>{
        const messages = await chatManager.getMessages();
        socket.emit("messageChat", messages);
        socket.broadcast.emit("newUser", `El usuario ${data.user} se acaba de conectar`);
    });

    socket.on("message", async(msgClient)=>{
        await chatManager.save(msgClient);
        const messages = await chatManager.getMessages();
        io.emit("messageChat", messages);
    });
});