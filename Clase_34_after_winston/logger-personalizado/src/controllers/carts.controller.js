import { CartsService } from "../services/carts.service.js";

export class CartsController{
    static createCart = async(req,res)=>{
        try {
            const cartCreated = await CartsService.createCart();
            res.json({status:"success", data:cartCreated});
        } catch (error) {
            res.json({status:"error", message:error.message});
        }
    };

    static purchase = async(req,res)=>{
        try {
            const cartId= req.params.cid;
            const productsAproved=[];
            const productsRejected=[];
            //verificar que el carrito exista
            // const cart = cartService ...
            // if(cart.products.length){
                // for(let i=0;i<cart.products.length;i++){
                    // const productCart = cart.products[i];
                    // const productDB = productService ...
                    //comparacion cantidad y stock
                // }
            // res.json({status:"success", data:ticketCreated});
            // } else {
                //el carrito no tiene productos
            // }
        } catch (error) {
            res.json({status:"error", message:error.message});
        }
    };
}