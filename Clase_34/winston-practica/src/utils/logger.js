import winston from "winston";
import {__dirname} from "../utils.js";
import path from "path";

const logger = winston.createLogger({
    transports:[
        //los transportes definen los sistemas de almacenamiento de los registros(logs)
        new winston.transports.Console({level:"http"}),
        new winston.transports.File({filename:path.join(__dirname,"/logs/errores.log"), level:"warn"})
    ]
});

//crear un middleware que use a logger
export const addLogger = (req,res,next)=>{
    req.logger=logger;
    req.logger.http(`${req.url} - ${req.method}`);
    next();
}