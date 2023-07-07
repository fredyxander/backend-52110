import { usersDao } from "../daos/index.js";

export class UsersService{
    static async getUserByEmail(email){
        return usersDao.getUserByEmail(email);
    };

    static async getUserById(id){
        return usersDao.getUserById(id);
    };

    static async saveUser(userInfo){
        return usersDao.saveUser(userInfo);
    };
}