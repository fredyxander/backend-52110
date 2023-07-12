import express from "express";
import { usersRouter } from "./routes/users.routes.js";

const port = 8080;
const app =express();

app.listen(port,()=>console.log(`Server listeining on port${port}`));

//routes
app.use("/api/users", usersRouter);