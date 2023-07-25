import dotenv from "dotenv";
dotenv.config();

export const config = {
    server:{
        port: process.env.PORT,
        secretSession: process.env.SECRET_SESSION,
        appEnv: process.env.NODE_ENV || "development"
    },
    mongo:{
        url: process.env.MONGO_URL
    }
}