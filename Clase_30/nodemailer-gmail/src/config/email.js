import nodemailer from "nodemailer";
import { config } from "./config.js";

//configuracion transporte para enviar mensajes con gmail
export const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    auth:{
        user:config.gmail.marketingEmail,
        pass:config.gmail.password
    },
    secure:false,
    tls:{
        rejectUnauthorized:false
    }
});