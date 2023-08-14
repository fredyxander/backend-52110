export class SessionsController{
    static signupUsers = (req,res)=>{
        res.json({status:"success",message:"Usuario registrado correctamente"});
    };

    static failSignup = (req,res)=>{
        res.status(500).json({status:"error", message:"Hubo un error al registrar al usuario"});
    };

    static loginUsers = (req,res)=>{
        res.json({status:"success", message:"login exitoso"});
    };

    static failLogin = (req,res)=>{
        res.status(500).json({status:"error", message:"Hubo un error al loguear al usuario"});
    };

    static logoutUser = (req,res)=>{
        req.session.destroy((err)=>{
            if(err) return res.status(500).json({status:"error",message:"No fue posible cerrar sesion"});
            res.json({status:"success", message:"sesion finalizada"});
        });
    };
}