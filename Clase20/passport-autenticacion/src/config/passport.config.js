import passport from "passport";
import localStrategy from "passport-local";
import { userModel } from "../models/users.model.js";
import { createHash, isValidPassword } from "../utils.js";

export const initializePassport = ()=>{
    //estartegia para registrar el usuario
    passport.use("signupStrategy",new localStrategy(
        {
            usernameField:"email", //ahora username tiene el valor del campo email
            passReqToCallback:true,//pasamos req a la siguiente funcion
        },
        async(req, username, password, done)=>{
            try {
                const userSignupForm = req.body;
                const user = await userModel.findOne({email:username});
                if(!user){
                    //si no existe el usuario, registramos el usuario
                    const newUser = {
                        first_name:userSignupForm.first_name,
                        last_name: userSignupForm.last_name,
                        age: userSignupForm.age,
                        email: userSignupForm.email,
                        password:createHash(password),
                    }
                    const userCreated = await userModel.create(newUser);
                    return done(null, userCreated);
                } else {
                    //          error,user
                    return done(null,false);
                }
            } catch (error) {
                return done(error);
            }
        }
    ));

    //extrategia de login
    passport.use("loginStrategy", new localStrategy(
        {
            usernameField:"email"
        },
        async(username, password, done)=>{
            try {
                //buscamos el usuario en la base de datos por el correo
                const userDB = await userModel.findOne({email:username});
                if(userDB){
                    //si existe el usuario, verificamos la contraseña del usuario
                    if(isValidPassword(password,userDB)){
                        return done(null,userDB);
                    } else {
                        return done(null, false)
                    }
                } else {
                    return done(null,false)
                }
            } catch (error) {
                return done(error);
            }
        }
    ))

    //serializacion y deserializacion
    passport.serializeUser((user,done)=>{
        done(null,user._id); ///req.session = _id usuario
    });

    passport.deserializeUser(async(id,done)=>{
        const userDB = await userModel.findById(id);
        done(null,userDB); //req.user = userDB
    });
}