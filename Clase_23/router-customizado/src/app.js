import express from "express";
import { UserRouter } from "./routes/user.routes.js";

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`Server ok`));

//creamos instancias de los routers
const usersRouter = new UserRouter();

//middlewares
app.use(express.json());

//routes
app.use("/api/users",usersRouter.getRouter());