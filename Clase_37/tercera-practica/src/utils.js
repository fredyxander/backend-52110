import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from "bcrypt";
export const __dirname = path.dirname(fileURLToPath(import.meta.url));
import jwt from "jsonwebtoken";
import { config } from "./config/config.js";

export const createHash = (password)=>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync());
};

export const validPassword = (password,user)=>{
    return bcrypt.compareSync(password,user.password);
};

export const verifyEmailToken = (token)=>{
    try {
        const info = jwt.verify(token,config.server.secretToken);
        return info.email;
    } catch (error) {
        return null;
    }
};