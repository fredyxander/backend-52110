import dotenv from "dotenv";
import { __dirname } from "../utils.js";
import path from "path";
// console.log("__dirname", __dirname);

const environment = "development";
const pathEnvs = environment === "development" ? path.join(__dirname,"/.env.development") : path.join(__dirname,".env.production");
// console.log("pathEnvs: ", pathEnvs)
dotenv.config({
    path:pathEnvs
});

export const config = {
    port:process.env.PORT || 3000,
    secretSession: process.env.SECRET_SESION,
    mongoUrl:process.env.MONGO_URL,
    adminEmail: process.env.ADMIN_EMAIL
}
console.log(config)