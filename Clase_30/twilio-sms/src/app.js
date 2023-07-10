import express from "express";
import {config} from "./config/config.js";
import { twilioClient } from "./config/twilio.js";

const port = config.server.port;
const app = express();

app.listen(port,()=>console.log(`Server listening on port ${port}`));

//ruta para enviar un sms
app.post("/twilio-coder",async(req,res)=>{
    try {
        const info = await twilioClient.messages.create({
            //estructura del sms
            body:"Tu orden fue registrada",
            from:config.twilio.phone,
            to:"+573507850462"
        });
        console.log("info: ", info);
        res.json({status:"success", message:"sms enviado"});
    } catch (error) {
        console.log(error.message);
        res.json({status:"error", message:"no se pudo enviar el mensaje"});
    }
});