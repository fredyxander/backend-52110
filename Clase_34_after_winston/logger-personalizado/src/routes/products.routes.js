import { Router } from "express";
import { ProductsController } from "../controllers/products.controller.js";
import { checkRoles, checkUserAuthenticatedView } from "../middlewares/auth.js";

const router = Router();

router.get("/", ProductsController.getProducts);
router.get("/:pid", ProductsController.getProduct);
router.post("/", checkUserAuthenticatedView, checkRoles(["admin","superadmin"]), ProductsController.createProduct);

export { router as productsRouter};