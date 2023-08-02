import passport from "passport";
import LocalStrategy from "passport-local";
import { createHash, validPassword} from "../utils.js";
import { UsersService } from "../services/users.service.js";

export const initPassport = ()=>{
    //estrategia del registro
    passport.use("signupStrategy",new LocalStrategy(
        {
            passReqToCallback:true,
            usernameField:"email"
        },
        async(req,username,password,done)=>{
            try {
                const {first_name,last_name} = req.body;
                const user = await UsersService.getUserByEmail(username);
                if(user){
                    return done(null,false);
                }
                //si no existe el usuario
                let role = "user";
                if(username.endsWith("@coder.com")){
                    role="admin";
                }
                //si no existe el usuario, guardamos al usuario en la base de datos
                const newUser = {
                    first_name,
                    last_name,
                    email:username,
                    age:req.body.age,
                    password:createHash(password),
                    role,
                };
                const createdUser = await UsersService.saveUser(newUser);
                return done(null,createdUser);
            } catch (error) {
                return done(error);
            }
        }
    ));

    //estratedia de login
    passport.use("loginStrategy", new LocalStrategy(
        {
            usernameField:"email"
        },
        async (username,password,done)=>{
            try {
                const user = await UsersService.getUserByEmail(username);
                if(!user){
                    return done(null,false);
                }
                //verificar la contraseña del usuario
                if(!validPassword(password,user)){
                    return done(null,false);
                }
                return done(null,user);
            } catch (error) {
                return done(error);
            }
        }
    ))

    //serializacion y deserializacion=>solo cuando trabajamos con session
    passport.serializeUser((user,done)=>{
        done(null, user._id)
    });

    passport.deserializeUser(async(id,done)=>{
        const user = await UsersService.getUserById(id);
        return done(null, user);//req.user=user
    });
}