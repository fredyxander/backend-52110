import {Router} from "express";
// import { CartFiles } from "../dao/managers/carts.files.js";
import { CartsMongo } from "../dao/managers/carts.mongo.js";

// const cartsService = new CartFiles();
const cartsService = new CartsMongo();

const router = Router();

//cart routes
router.get("/:cid",async(req,res)=>{
    try {
        const cartId = req.params.cid;
        const cart = await cartsService.getCartById(cartId);
        res.json({status:"success",data:cart});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({status:"error", message:"Hubo un error al obtener el carrito"});
    }
});

router.post("/",async(req,res)=>{
    try {
        const cartCreated = await cartsService.createCart();
        res.json({status:"success",data:cartCreated});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({status:"error", message:error.message});
    }
});

export {router as cartsRouter}