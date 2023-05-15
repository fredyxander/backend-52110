import {cartsModel} from "../models/carts.model.js";

export class CartsMongo{
    constructor(){
        this.model = cartsModel;
    };

    async getCartById(id){
        try {
            const data = await this.model.findById(id);
            if(!data){
                throw new Error("el carrito no existe")
            }
            return data;
        } catch (error) {
            throw new Error(`Error al obtener carrito ${error.message}`);
        }
    };

    async createCart(cart){
        try {
            const cart = {};
            const data = await this.model.create(cart);
            return data;
        } catch (error) {
            throw new Error(`Error al crear el carrito ${error.message}`);
        }
    };

    async addProduct(cartId,productId){};

    async deleteProduct(cartId, productId){};

    async updateCart(cartId, cart){
        try {
            const data = await this.model.findByIdAndUpdate(cartId,cart,{new:true});
            if(!data){
                throw new Error("el carrito no existe")
            }
            return data;
        } catch (error) {
            throw new Error(`Error al actualizar el carrito ${error.message}`);
        }
    };
}