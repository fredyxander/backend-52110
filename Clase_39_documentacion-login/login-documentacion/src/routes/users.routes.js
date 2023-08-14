import { Router } from "express";
import { UsersController } from "../controllers/users.controller.js";
import { checkUserAuthenticated } from "../middlewares/auth.js";

const router = Router();

router.get("/profile", checkUserAuthenticated, UsersController.getprofile);

export {router as usersRouter};