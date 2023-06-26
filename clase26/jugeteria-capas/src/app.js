import express from "express";
import { toysRouter } from "./ruteo/toys.routes.js";
import { usersRouter } from "./ruteo/users.routes.js";

const port = 8080;
const app  = express();

app.listen(port,()=>console.log(`Server listening on port ${port}`));

//midlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use("/api/toys",toysRouter);
app.use("/api/users", usersRouter);