const checkUserAuthenticated = (req,res,next)=>{
    if(req.user){
        next();
    } else {
        res.status(401).json({status:"error", message:"Debes estar autenticado"});
    }
};

export {checkUserAuthenticated}