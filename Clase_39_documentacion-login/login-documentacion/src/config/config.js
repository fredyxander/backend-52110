import dotenv from "dotenv";
dotenv.config();

export const config = {
    server:{
        port:process.env.PORT,
        sessionKey:process.env.SESSION_KEY
    },
    mongo:{
        url:process.env.MONGO_URL
    }
}