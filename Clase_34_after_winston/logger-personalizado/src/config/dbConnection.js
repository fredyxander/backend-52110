import mongoose from "mongoose";
import { config } from "./config.js";
import { logger } from "../utils/logger.js";

export const connectDB = async()=>{
    try {
        await mongoose.connect(config.mongo.url);
        logger.info("base de datos conectada");
    } catch (error) {
        logger.fatal(`Hubo un error al conectar la base de datos ${error.message}`);
    }
}