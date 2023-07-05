import { Router } from "express";
import { getProducts, createProduct } from "../controllers/products.controller.js";

const router = Router();

router.get("/", getProducts);
router.post("/", createProduct);

export {router as productsRouter};