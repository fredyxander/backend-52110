import { cartsModel } from "../models/carts.model.js";

export class CartsMongo{
    constructor(){
        this.model=cartsModel;
    };

    async createCart(){
        try {
            const cart = {
                products:[]
            };
            const cartCreated = await this.model.create(cart);
            return cartCreated;
        } catch (error) {
            throw error;
        }
    };
};