import { cartsModel } from "../models/cart.model.js";

export class CartsMongo{
    constructor(){
        this.model = cartsModel;
    };

    async create(){
        const cart = {};
        try {
            const result = await this.model.create(cart);
            return result;
        } catch (error) {
            throw new Error(`Error create cart ${error.message}`);
        }
    };

    async get(cartId){
        try {
            const result = await this.model.findOne({_id:cartId});
            if(!result){
                throw new Error(`No se encontro el carrito ${error.message}`);
            }
            //convertir el formato bson a json
            const data = JSON.parse(JSON.stringify(result));
            return data;
        } catch (error) {
            throw new Error(`Error create cart ${error.message}`);
        }
    };

    async addProduct(cartId,productId){
        try {
            const cart = await this.get(cartId);
            cart.products.push({productId:productId, quantity:1});
            // console.log("cart", cart);
            const result = await this.model.findByIdAndUpdate(cartId,cart,{new:true});
            return result;
        } catch (error) {
            throw new Error(`Error create cart ${error.message}`);
        }
    };
}