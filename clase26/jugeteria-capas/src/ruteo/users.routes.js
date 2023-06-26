import {Router} from "express";
//importar controladores
import { UsersController } from "../controlador/users.controller.js";

const router = Router();

router.get("/", UsersController.getUsers);
router.post("/", UsersController.saveUser);

export {router as usersRouter};