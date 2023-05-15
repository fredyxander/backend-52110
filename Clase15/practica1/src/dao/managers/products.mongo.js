import { productsModel } from "../models/products.model.js";

export class ProductsMongo{
    constructor(){
        this.model = productsModel;
    }

    async getProducts(){
        try {
            const data = await this.model.find();
            return data;
        } catch (error) {
            throw new Error(`Error al obtener productos ${error.message}`);
        }
    };

    async getProductById(id){
        try {
            const data = await this.model.findById(id);
            if(!data){
                throw new Error("el producto no existe")
            }
            return data;
        } catch (error) {
            throw new Error(`Error al obtener producto ${error.message}`);
        }
    };

    async createProduct(product){
        try {
            const data = await this.model.create(product);
            return data;
        } catch (error) {
            throw new Error(`Error al crear el producto ${error.message}`);
        }
    };

    async updateProduct(id,product){
        try {
            const data = await this.model.findByIdAndUpdate(id,product,{new:true});
            if(!data){
                throw new Error("el producto no existe")
            }
            return data;
        } catch (error) {
            throw new Error(`Error al actualizar el producto ${error.message}`);
        }
    };

    async deleteProduct(id){
        try {
            await this.model.findByIdAndDelete(id);
            return {message: "producto eliminado"};
        } catch (error) {
            throw new Error(`Error al eliminar el producto ${error.message}`);
        }
    };
}