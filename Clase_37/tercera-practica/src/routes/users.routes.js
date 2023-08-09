import { Router } from "express";
import { checkUserAuthenticatedView,checkRoles } from "../middlewares/auth.js";
import { UsersController } from "../controllers/users.controller.js";

const router = Router();

router.put("/premium/:uid", checkUserAuthenticatedView, checkRoles(["admin"]) , UsersController.modifyRole );

export { router as usersRouter};