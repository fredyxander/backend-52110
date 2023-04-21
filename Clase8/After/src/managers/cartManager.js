import fs from "fs";
import path from "path";
import { __dirname } from "../utils.js";

class CartManager{
    constructor(pathName){
        this.path=path.join(__dirname,`/files/${pathName}`);
    }

    fileExists(){
        return fs.existsSync(this.path);
    };

    generateId(products){
        let newId;
        if(!products.length){
            newId=1;
        } else{
            newId=products[products.length-1].id+1;
        }
        return newId;
    }

    async addCart(){
        try {
            const cart={
                products:[]
            }
            if(this.fileExists()){
                const content = await fs.promises.readFile(this.path,"utf-8");
                const carts = JSON.parse(content);
                const cartId = this.generateId(carts);
                cart.id = cartId;
                // console.log("cart: ", cart);
                carts.push(cart);
                await fs.promises.writeFile(this.path,JSON.stringify(carts,null,2));
                return cart;
            } else {
                const cartId = this.generateId([]);
                cart.id = cartId;
                // console.log("product: ", product);
                await fs.promises.writeFile(this.path,JSON.stringify([cart],null,2));
                return cart;
            }
        } catch (error) {
            // console.log(error.message);
            throw new Error(error.message);
        }
    };

    async getCartById(id){
        try {
            const cartId = parseInt(id);
            if(this.fileExists()){
                const content = await fs.promises.readFile(this.path,"utf-8");
                const carts = JSON.parse(content);
                const cart = carts.find(item=>item.id === cartId);
                if(cart){
                    return cart;
                } else {
                    return null;
                }
            } else {
                throw new Error("El archivo no existe");
            }
        } catch (error) {
            // console.log(error.message);
            throw new Error(error.message);
        }
    };

    async addProductToCart(cartId,productId){
        try {
            if(this.fileExists()){
                const content = await fs.promises.readFile(this.path,"utf-8");
                const carts = JSON.parse(content);
                const cartIndex=carts.findIndex(item=>item.id === parseInt(cartId));
                if(cartIndex>=0){
                    const productIndex = carts[cartIndex].products.findIndex(item=>item.product === parseInt(productId));
                    if(productIndex>=0){
                        carts[cartIndex].products[productIndex]={
                            product: carts[cartIndex].products[productIndex].product,
                            quantity: carts[cartIndex].products[productIndex].quantity+1
                        }
                        await fs.promises.writeFile(this.path,JSON.stringify(carts,null,2));
                    } else {
                        const newCartProduct={
                            product:parseInt(productId),
                            quantity:1
                        }
                        carts[cartIndex].products.push(newCartProduct);
                        await fs.promises.writeFile(this.path,JSON.stringify(carts,null,2));
                    }
                    return "producto agregado"
                } else {
                    throw new Error(`El carrito no existe`);
                }
            } else {
                throw new Error("El archivo no existe");
            }
        } catch (error) {
            // console.log(error.message);
            throw new Error(error.message);
        }
    };
}

export {CartManager}