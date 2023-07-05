import { usersModel } from "../models/users.model.js";

export class UsersMongo{
    constructor(){
        this.model = usersModel;
    };

    async getUsers(){
        try {
            const users = await this.model.find();
            return users;
        } catch (error) {
            throw error
        }
    };

    async getUserById(userId){
        try {
            const user = await this.model.findById(userId);
            if(!user){
                throw new Error("El usuario no existe");
            }
            return user;
        } catch (error) {
            throw error
        }
    };

    async createUser(userInfo){
        try {
            const userCreated = await this.model.create(userInfo);
            return userCreated;
        } catch (error) {
            throw error
        }
    };

    async updateUser(userId,userInfo){
        try {
            const userUpdate = await this.model.findByIdAndUpdate(userId,userInfo,{new:true});
            return userUpdate;
        } catch (error) {
            throw error
        }
    };
}