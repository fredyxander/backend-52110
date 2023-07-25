import { productsModel } from "../models/products.model.js";

export class ProductsMongo{
    constructor(){
        this.model=productsModel;
    };

    async getProducts(){
        try {
            const products = await this.model.find();
            return JSON.parse(JSON.stringify(products));
        } catch (error) {
            console.log("error:", error);
            throw error;
        }
    };

    async getProductById(productId){
        try {
            const product = await this.model.findById(productId);
            if(!product){
                throw new Error("El producto no existe");
            }
            return JSON.parse(JSON.stringify(product));
        } catch (error) {
            throw error;
        }
    };

    async createProduct(productInfo){
        try {
            const productCreated = await this.model.create(productInfo);
            return productCreated;
        } catch (error) {
            throw error;
        }
    };
};