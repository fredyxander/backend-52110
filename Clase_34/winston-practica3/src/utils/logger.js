import winston from "winston";
import {__dirname} from "../utils.js";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const currentEnv = process.env.NODE_ENV;

export const devLogger = winston.createLogger({
    transports:[
        new winston.transports.Console({level:"verbose"})
    ]
});

export const prodLogger = winston.createLogger({
    transports:[
        new winston.transports.Console({level:"http"}),
        new winston.transports.File({filename:path.join(__dirname,"/logs/errores.log"), level:"warn"})
    ]
})

let logger;
if(currentEnv === "development"){
    logger=devLogger;
} else {
    logger=prodLogger;
}
export {logger}