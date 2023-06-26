//importar el servicio de usuarios
import { UsersService } from "../negocio/users.service.js";

export class UsersController{
    static getUsers(req,res){
        const result = UsersService.getUsers();
        res.json({status:"success", data:result});
    };

    static saveUser(req,res){
        const result = UsersService.saveUser(req.body);
        res.json({status:"success", data:result});
    };

};