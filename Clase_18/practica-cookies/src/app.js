import express from "express";
import cookieParser from "cookie-parser";

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`Server listening on port ${port}`));

//middlewares
app.use(cookieParser("claveSecretaCookies")); //gestión de cookies en el servidor.


//ruta crear una cookie
app.get("/set-cookie",(req,res)=>{
    //res.cookie()
    res.cookie("galleta1", "oreo",{maxAge:10000}).send("galleta creada")
});

app.get("/set-cookie2",(req,res)=>{
    //res.cookie()
    res.cookie("galleta2", "ritz").send("galleta creada")
});

app.get("/set-cookie3",(req,res)=>{
    //res.cookie()
    res.cookie("galleta3", '{"username":"pepe@gmail.com","role":"customer"}',{signed:true}).send("galleta creada")
});

//ruta para obtener las cookies del navegador
app.get("/get-cookies",(req,res)=>{
    console.log("contenido cookies", req.cookies.galleta3);
    const galleta3 = JSON.parse(req.cookies.galleta3);
    // console.log("galleta3", galleta3);
    if(galleta3.role === "admin"){
        console.log("tienes acceso");
    }
    res.send({message:"cookies actuales", cookies:req.cookies})
});

//ruta para elimiar cookie
app.get("/delete-cookie",(req,res)=>{
    res.clearCookie("galleta2").send("galleta eliminada");
});

//ruta para obtener cookies firmadas
//ruta para obtener las cookies del navegador
app.get("/get-cookies-firmadas",(req,res)=>{
    res.send({message:"cookies firmadas", cookies:req.signedCookies})
});