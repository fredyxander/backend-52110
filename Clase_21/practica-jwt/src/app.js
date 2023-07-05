import express from "express";
import { sessionRouter } from "./routes/auth.routes.js";

const port = 8080;
const app = express();

app.use(express.json());

app.listen(port,()=>console.log('Server ok'));

//routes
app.use("/api/sessions", sessionRouter);