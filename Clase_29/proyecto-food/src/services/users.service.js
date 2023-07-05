import { usersDao } from "../dao/index.js";

export class UsersService{
    static async getUsers(){
        return await usersDao.getUsers();
    };

    static async getUser(id){
        return await usersDao.getUserById(id)
    };

    static async createUser(user){
        return await usersDao.createUser(user);
    };

    static async updateUser(id, user){
        return await usersDao.updateUser(id,user);
    };
}