import { Router } from "express";
import { ProductsController } from "../controllers/products.controller.js";
import { checkRoles, checkUserAuthenticatedView } from "../middlewares/auth.js";

const router = Router();

router.get("/", ProductsController.getProducts);
router.get("/:pid", ProductsController.getProduct);
router.post("/", checkUserAuthenticatedView, checkRoles(["admin","premium"]), ProductsController.createProduct);
router.delete("/:pid",checkUserAuthenticatedView,checkRoles(["admin","premium"]), ProductsController.deleteProduct);

export { router as productsRouter};