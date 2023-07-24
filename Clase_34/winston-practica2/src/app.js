import express from "express";
import { logger } from "./utils/logger.js";

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`Server ok`));

app.get("/",(req,res)=>{
    // console.log("base de datos conectada");
    logger.debug("mensaje de nivel debug");
    logger.info("mensaje informativo info");
    logger.error("mensaje de nivel error");
    logger.verbose("mensaje nivel verbose");
    logger.warn("mensaje de advertencia warn")
    res.send("utilizando logger");
});