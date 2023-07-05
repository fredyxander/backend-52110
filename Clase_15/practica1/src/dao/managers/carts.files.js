import {__dirname} from "../../utils.js";
import {options} from "../../config/options.js";
import path from "path";

export class CartFiles{
    constructor(){
        this.path = path.join(__dirname,`/dao/files/${options.filesystem.carts}`)
    };

    async getCartById(id){};
    async createCart(){};
    async addProduct(cartId,productId){};
    async deleteProduct(cartId, productId){};
    async updateCart(cartId, cart){};
}