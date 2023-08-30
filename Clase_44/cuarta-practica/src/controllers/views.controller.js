export class ViewsController{
    static renderHome = (req,res)=>{
        res.render("home");
    };

    static renderLogin = (req,res)=>{
        res.render("login");
    };

    static renderSignup = (req,res)=>{
        res.render("signup");
    };

    static renderProfile = (req,res)=>{
        // console.log(req.user);
        res.render("profile",{user:req.user});
    };

    static forgotPass = (req,res)=>{
        res.render("forgotPassword");
    };

    static resetPassword = (req,res)=>{
        const token = req.query.token;
        res.render("resetPass",{token});
    }
}