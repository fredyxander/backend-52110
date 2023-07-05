import { Router } from "express";
import { getOrders, getOrderById,createOrder, completeOrder } from "../controllers/orders.controller.js";

const router = Router();

router.get("/", getOrders);
router.get("/:oid", getOrderById);
router.post("/", createOrder);
router.put("/:oid", completeOrder);

export {router as ordersRouter};