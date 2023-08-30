import { Router } from "express";
import { checkUserAuthenticatedView,checkRoles } from "../middlewares/auth.js";
import { UsersController } from "../controllers/users.controller.js";
import { uploadUserDoc } from "../utils.js";

const router = Router();

router.put("/premium/:uid", checkUserAuthenticatedView, checkRoles(["admin"]) , UsersController.modifyRole );

router.post("/:uid/documents", checkUserAuthenticatedView, uploadUserDoc.fields([{name:"identificacion",maxCount:1},{name:"domicilio",maxCount:1}, {name:"estadoDeCuenta",maxCount:1}]) , UsersController.uploadDocuments )

export { router as usersRouter};