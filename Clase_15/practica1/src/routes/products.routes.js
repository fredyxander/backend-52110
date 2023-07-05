import {Router} from "express";
import { ProductsFiles } from "../dao/managers/products.files.js";
import { ProductsMongo } from "../dao/managers/products.mongo.js";

// const productsService = new ProductsFiles();
const productsService = new ProductsMongo();

const router = Router();

//products routes
router.get("/",async(req,res)=>{
    try {
        const products = await productsService.getProducts();
        res.json({status:"success",data:products});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({status:"error", message:error.message});
    }
});

router.post("/",async(req,res)=>{
    try {
        const productCreated = await productsService.createProduct(req.body);
        res.json({status:"success",data:productCreated});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({status:"error", message:error.message});
    }
});

router.delete("/:id",async(req,res)=>{
    try {
        const result = await productsService.deleteProduct(req.params.id);
        res.json({status:"success",data:result.message});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({status:"error", message:error.message});
    }
});

export {router as productsRouter}