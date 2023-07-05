import { productsModel } from "../models/products.model.js";

export class ProductsMongo{
    constructor(){
        this.model = productsModel;
    };

    async getPaginate(query={},options={}){
        try {
            const result = await this.model.paginate(query, options);
            return result;
        } catch (error) {
            throw new Error(`Error get all products ${error.message}`);
        }
    };

    async create(product){
        try {
            const result = await this.model.create(product);
            return result;
        } catch (error) {
            throw new Error(`Error create product ${error.message}`);
        }
    }
}