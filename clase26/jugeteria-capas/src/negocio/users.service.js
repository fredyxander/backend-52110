//importar la capa de persistencia
import { UsersManager } from "../persistencia/users.manager.js";
const usermanager = new UsersManager();

export class UsersService{
    static getUsers(){
        const result = usermanager.get();
        return result;
    };

    static saveUser(user){
        const result = usermanager.saveUser(user);
        return result;
    };

};