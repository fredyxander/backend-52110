import bcrypt from "bcrypt";
import path from 'path';
import { fileURLToPath } from 'url';
export const __dirname = path.dirname(fileURLToPath(import.meta.url));

//funcion para crear el hash
export const createHash = (password)=>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync());
};

//funcion para comparar las contraseñas
export const isValidPassword = (password, user)=>{
    //password - contraseña del formulario de login
    //user - informacion del usuario de la base de datos
    return bcrypt.compareSync(password,user.password);
};