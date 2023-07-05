import { Router } from "express";
import { CartsMongo } from "../daos/managers/carts.mongo.js";

const router = Router();
const cartService = new CartsMongo();

router.post("/",async(req,res)=>{
    try {
        const cartCreated = await cartService.create();
        res.json({status:"success", data:cartCreated});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

router.put("/:cid/:pid",async(req,res)=>{
    try {
        const cartId = req.params.cid;
        const productId = req.params.pid;
        const cart = await cartService.get(cartId);
        // verificar que el producto exista antes de agregarlo al carrito.
        const result = await cartService.addProduct(cartId,productId);
        res.json({status:"success", data:result});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

router.get("/:cid",async(req,res)=>{
    try {
        const cartId = req.params.cid;
        const cart = await cartService.get(cartId);
        res.json({status:"success", data:cart});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

export {router as cartsRouter}