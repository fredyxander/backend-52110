import {Router} from "express";
import { ProductManager } from "../managers/ProductManager.js";

const productManager = new ProductManager("products.json");
// console.log(productManager);

const router = Router();

router.get("/", async(req,res)=>{
    try {
        const products = await productManager.getProducts();
        res.json({status:"success", data:products});
    } catch (error) {
        res.status(400).json({status:"error", message:error.message});
    }
});

//endpoint para agregar el producto
router.post("/",async(req,res)=>{
    try {
        const {title,description, code,price} = req.body;
        if(!title || !description || !code || !price){
            return res.status(400).json({status:"error", message:"Los campos no son validos"})
        }
        const newProduct = req.body;
        const productSaved = await productManager.addProduct(newProduct);
        res.json({status:"success", data:productSaved});
    } catch (error) {
        res.status(400).json({status:"error", message:error.message});
    }
});

export{router as productRouter};