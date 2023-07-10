import express from "express";
import { config } from "./config/config.js";
import { transporter } from "./config/email.js";
import {__dirname} from "./utils.js";
import path from "path";

const port = config.server.port;
const app = express();

app.listen(port,()=>console.log(`Server listening on port ${port}`));

//router - controller
//creacion del cuerpo del correo
const emailTemplate = `<div>
        <h1>Bienvenido!!</h1>
        <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub.jpg" style="width:250px"/>
        <p>Ya puedes empezar a usar nuestros servicios</p>
        <a href="https://www.google.com/">Explorar</a>
</div>`;

const emailImage = `<div>
    <h1>Bienvenido!!</h1>
    <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub.jpg" style="width:250px"/>
    <p>Ya puedes empezar a usar nuestros servicios</p>
    <a href="https://www.google.com/">Explorar</a>
    <p>Imagen cargada desde archivo</p>
    <img src="cid:imagenPerro" />
</div>`;

//Definir la estructura del correo
const mailOptions = {
    from:"ecommerce",
    to:"freddy5210@gmail.com",
    subject:"Registro exitoso con imagen",
    html:emailImage,
    attachments:[
        {
            filename:"perro.jpg",
            path:path.join(__dirname,"/files/images/perro.jpg"),
            cid:"imagenPerro"
        },
        {
            filename:"documento.txt",
            path:path.join(__dirname,"/files/documents/documento.txt"),
            cid:"documento1"
        }
    ]
};

//ruta para enviar el correo
app.post("/email-coder",async(req,res)=>{
    try{
        //usar el transports con la estructura del correo
        const info = await transporter.sendMail(mailOptions);
        console.log("info: ", info);
        res.json({status:"success", message:`Correo enviado a ${mailOptions.to}`});
    }catch(error){
        console.log(error.message);
        res.json({status:"error", message:"hubo un error al enviar el correo"});
    }
});