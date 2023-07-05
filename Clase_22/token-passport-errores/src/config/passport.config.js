import passport from "passport";
import jwt from "passport-jwt";

const jwtStrategy = jwt.Strategy;
const ExtractJwt = jwt.ExtractJwt;//Extraer el token desde [cookie,headers,body,etc];

export const initializePassport = ()=>{
    passport.use("jwt",new jwtStrategy(
        {
            //extraer la informacion del token
            jwtFromRequest:ExtractJwt.fromExtractors([cookieExtractorToken]),
            secretOrKey:"claveSecretaToken"
        },
        async(jwtPayload,done)=>{
            //jwtPayload: info guardada en el token previamente
            try {
                return done(null,jwtPayload)//req.user
            } catch (error) {
                return done(error);
            }
        }
    ));
};

//funcion para extraer el token de la cookie
const cookieExtractorToken = (req)=>{
    let token = null;
    if(req && req.cookies){
        token = req.cookies["cookie-token"]
    }
    return token;
}