import { Router } from "express";
import { CartsController } from "../controllers/carts.controller.js";

const router = Router();

router.post("/", CartsController.createCart);
router.post("/:cid/purchase", CartsController.purchase);

export { router as cartsRouter};