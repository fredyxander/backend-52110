import express from "express";
import session from "express-session";
import { checkSession } from "./middlewares/auth.js";

const port = 8080;
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(port,()=>console.log(`Server listening on port ${port}`));

//configuracion de session
app.use(session({
    secret:"claveSecretaSesiones",
    resave:true,//mantiene la sesion activa
    saveUninitialized:true,//mantiene la informacion de la sesion guardada
}));

app.get("/session", (req,res)=>{
    //req.session //session es un objeto donde podemos guardar informacion del usuario.
    console.log(req.session)
    if(req.session.counter){
        req.session.counter++;
        res.send(`Has visita esta pagina ${req.session.counter} veces`);
    } else {
        req.session.counter=1;
        res.send("bienvenido");
    }
});

app.post("/login", (req,res)=>{
    const {email, password} = req.body;
    if(email !== "pepe@gmail.com" || password !=="1234"){
        res.json({status:"error", message:"credenciales invalidas"})
    } else {
        //crear la informacion que guardaremos en la session
        const info = {
            email:email,
            admin:true
        }
        //guardamos la informacion en la session
        req.session.user = info;
        res.json({status:"success", message:"sesion iniciada"});
    }
});

app.get("/perfil", checkSession, (req,res)=>{
    res.send(`Bienvenido ${req.session.user.email}`);
});

app.get("/logout",(req,res)=>{
    req.session.destroy((error)=>{
        if(error) return res.send("no se pudo cerrar la session");
        res.send("sesion finalizada")
    })
})