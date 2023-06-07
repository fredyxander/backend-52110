import passport from "passport";

const authenticate = (strategy)=>{
    const passportAuthenticate = async(req,res,next)=>{
        passport.authenticate(strategy,{session:false},(err,user,info)=>{
            if(err) return next(err);
            if(!user){
                return res.status(401).json({status:"error", message:info.toString()})
            }
            req.user=user;
            next();
        })(req,res,next);
    };
    return passportAuthenticate;
}

const authorize = (role)=>{
    return async(req,res,next)=>{
        if(!req.user) return res.json({status:"error", message:"no esta autorizado"});
        if(req.user.role !== role){
            return res.json({status:"error", message:"rol de usuario sin permisos"});
        }
        next();
    }
}

export {authenticate,authorize}