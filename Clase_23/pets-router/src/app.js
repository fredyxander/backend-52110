import express from "express";
import { petsRouter } from "./routes/pets.routes.js";

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`Server ok`));

//middlewares
app.use(express.json());

//routes
app.use("/api/pets",petsRouter);