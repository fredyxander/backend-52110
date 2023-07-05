//verifica si el usuario tiene una sesion activa
export const checkSession = (req, res, next)=>{
    if(req.session.user){
        next();
    } else {
        res.send("Debes iniciar sesion para acceder a este recurso")
    }
}