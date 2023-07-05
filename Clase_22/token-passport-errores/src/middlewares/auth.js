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

export {authenticate}