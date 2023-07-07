
export class SessionsController{
    static signupUsers = (req,res)=>{
        res.render("login",{message:"Usuario registrado correctamente"});
    };

    static failSignup = (req,res)=>{
        res.send("<p>Hubo un error al registrar al usuario <a href='/signup'>Intente de nuevo</a></p>");
    };

    static loginUsers = (req,res)=>{
        res.redirect("/profile");
    };

    static failLogin = (req,res)=>{
        res.send("<p>Hubo un error al iniciar sesion <a href='/login'>Intente de nuevo</a></p>");
    };

    static logoutUser = (req,res)=>{
        req.session.destroy((err)=>{
            if(err) return res.send("<p>No fue posible cerrar sesion <a>intente de nuevo</a></p>");
            res.redirect("/");
        });
    };
}