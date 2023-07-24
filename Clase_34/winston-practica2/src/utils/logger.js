import winston from "winston";
import {__dirname} from "../utils.js";
import path from "path";

export const logger = winston.createLogger({
    transports:[
        //los transportes definen los sistemas de almacenamiento de los registros(logs)
        new winston.transports.Console({level:"http"}),
        new winston.transports.File({filename:path.join(__dirname,"/logs/errores.log"), level:"warn"})
    ]
});