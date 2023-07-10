import dotenv from "dotenv";
dotenv.config();

export const config = {
    server:{
        port:process.env.PORT || 8080,
        secretSession: process.env.SECRET_SESSION
    },
    mongo:{
        url:process.env.MONGO_URL
    },
    gmail:{
        marketingEmail:process.env.MARKETING_EMAIL,
        password:process.env.GMAIL_PASSWORD
    }
};