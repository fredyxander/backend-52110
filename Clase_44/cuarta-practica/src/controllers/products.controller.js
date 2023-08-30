import { ProductsService } from "../services/products.service.js";

export class ProductsController{
    static getProducts = async(req,res)=>{
        try {
            const products = await ProductsService.getProducts();
            res.json({status:"success", data:products});
        } catch (error) {
            res.json({status:"error", message:error.message});
        }
    };

    static getProduct = async(req,res)=>{
        try {
            const productId = req.params.pid;
            const product = await ProductsService.getProductById(productId)
            res.json({status:"success", data:product});
        } catch (error) {
            res.json({status:"error", message:error.message});
        }
    };

    static createProduct = async(req,res)=>{
        try {
            const productInfo = req.body;
            productInfo.owner = req.user._id;
            const productCreated = await ProductsService.createProduct(productInfo);
            res.json({status:"success", data:productCreated});
        } catch (error) {
            res.json({status:"error", message:error.message});
        }
    };

    static deleteProduct = async(req,res)=>{
        try {
            const productId = req.params.pid;
            const product = await ProductsService.getProductById(productId);
            //validamos si el usuario que esta borrando el producto es premium.
            if(req.user.role === "premium" && product.owner == req.user._id || req.user.role === "admin"){
                const result = await ProductsService.deleteProduct(productId);
                res.json({status:"success", message:result});
            } else {
                res.json({status:"error", message:"no tienes permisos"});
            }
        } catch (error) {
            res.json({status:"error", message:error.message});
        }
    };
}