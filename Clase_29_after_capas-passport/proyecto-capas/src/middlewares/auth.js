const checkUserAuthenticatedView = (req,res,next)=>{
    if(req.user){
        next();
    } else {
        // res.json({status:"error", message:"Debes estar autenticado"});
        res.send("<p>Debes estar autenticado <a href='/login'>Ir al login</a></p>")
    }
};

const showAuthView = (req,res,next)=>{
    if(req.user){
        res.redirect("/profile");
    } else {
        next();
    }
}

export {checkUserAuthenticatedView, showAuthView}