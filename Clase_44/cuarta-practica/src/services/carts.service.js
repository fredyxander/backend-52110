import { cartsDao } from "../daos/index.js";

export class CartsService{
    static async createCart(){
        return cartsDao.createCart();
    };
};