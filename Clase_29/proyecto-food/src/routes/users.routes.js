import { Router } from "express";
import { getUsers, getUserById, saveUser } from "../controllers/users.controller.js";

const router = Router();

//definir las rutas y vincularlas con su respectivo controlador
router.get("/", getUsers);
router.get("/:uid",getUserById);
router.post("/", saveUser);

export {router as usersRouter};