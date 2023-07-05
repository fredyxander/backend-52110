import jwt from "jsonwebtoken";

const PRIVATE_KEY="coserSecretTokenKey";

// jwt.sign:
// 1parametro:payload: informacion que queremos guardar en el token.
// 2 parametro: la clave para encriptar la informacion.PRIVATE_KEY.
// 3 parametro: un objeto de configuracion.
export const generateToken=(user)=>{
    const token = jwt.sign(user,PRIVATE_KEY,{
        expiresIn:"24h"
    });
    return token;
};

export const validateToken = (req,res,next)=>{
    const authHeader = req.headers["authorization"]; // "Bearer token"
    if(!authHeader) return res.send("autenticacion invalida")
    // split(" ") => ["Bearer","token"]
    const token= authHeader.split(" ")[1]; //token
    if(!token) return res.send("autenticacion invalida");
    //verificar que el token sea valido
    jwt.verify(token,PRIVATE_KEY,(error,payload)=>{
        if(error) return res.send("token invalido");
        req.user = payload;
        next();
    });
}