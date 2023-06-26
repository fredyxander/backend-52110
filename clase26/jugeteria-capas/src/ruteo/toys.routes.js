import { Router } from "express";
import { welcomeToys, getToysController, saveToyController } from "../controlador/toys.controller.js";

const router = Router();

router.get("/welcome", welcomeToys);
router.get("/", getToysController);
router.post("/", saveToyController);

export {router as toysRouter}