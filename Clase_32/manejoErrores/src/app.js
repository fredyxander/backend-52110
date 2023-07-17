import express from "express";
import { usersRouter } from "./routes/users.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const port = 8080;
const app = express();

app.use(express.json());

app.listen(port,()=>console.log('server ok'));

//routes
app.use("/api/users",usersRouter);
app.use(errorHandler);