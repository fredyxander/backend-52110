import { Router } from "express";
import { ProductsController } from "../controllers/products.controller.js";

const router = Router();

router.get("/", ProductsController.getProducts);
router.get("/:pid", ProductsController.getProduct);
router.post("/", ProductsController.createProduct);

export { router as productsRouter};