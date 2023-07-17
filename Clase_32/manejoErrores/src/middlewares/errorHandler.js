import { EError } from "../enums/EError.js";

export const errorHandler = (error,req,res,next)=>{
    console.log("code: ", error.code);
    switch (error.code) {
        case EError.ROUTING_ERROR:
            res.json({status:"error",message:error.message});
            break;
        case EError.INVALID_JSON:
            res.json({status:"error",message:error.cause});
            break;
        case EError.IVALID_PARAMS:
            res.json({status:"error",message:error.cause, errorMessage:error.message});
            break;
        default:
            break;
    }
}