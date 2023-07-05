import { businessModel } from "../models/business.model.js";

export class BusinessMongo{
    constructor(){
        this.model = businessModel;
    };

    async getAllBusiness(){
        try {
            const business = await this.model.find();
            return business;
        } catch (error) {
            throw error
        }
    };

    async getBusinessById(businessId){
        try {
            const business = await this.model.findById(businessId);
            if(!business){
                throw new Error("Este negocio no existe");
            }
            return business;
        } catch (error) {
            throw error
        }
    };

    async createBusiness(businessInfo){
        try {
            const businessCreated = await this.model.create(businessInfo);
            return businessCreated;
        } catch (error) {
            throw error
        }
    };

    async updateBusiness(businesId,businessInfo){
        try {
            const businessUpdate = await this.model.findByIdAndUpdate(businesId,businessInfo,{new:true});
            return businessUpdate;
        } catch (error) {
            throw error
        }
    };
}