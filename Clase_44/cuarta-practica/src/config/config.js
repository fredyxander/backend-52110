import dotenv from "dotenv";
dotenv.config();

export const config = {
    server:{
        port: process.env.PORT,
        secretSession: process.env.SECRET_SESSION,
        appEnv: process.env.NODE_ENV || "development",
        secretToken: process.env.SECRET_TOKEN,
    },
    mongo:{
        url: process.env.MONGO_URL
    },
    gmail:{
        adminEmail:process.env.ADMIN_GMAIL,
        adminPass:process.env.ADMIN_PASS
    }
}