import express from "express";
import { config } from "./config/config.js";

const app = express();
const port = process.env.PORT || 8080;

app.listen(port,()=>console.log(`Server listening on port ${port}`));