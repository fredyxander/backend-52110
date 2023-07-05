import { businessDao } from "../dao/index.js";

export class BusinessService{
    static async getBusiness(){
        return await businessDao.getAllBusiness();
    };

    static async getBusinessById(id){
        return await businessDao.getBusinessById(id);
    };

    static async createBusiness(business){
        return await businessDao.createBusiness(business);
    };

    static async updateBusiness(id, business){
        return await businessDao.updateBusiness(id,business);
    };
}