import { Router } from "express";
import { checkUserAuthenticatedView, showAuthView } from "../middlewares/auth.js";
import { ViewsController } from "../controllers/views.controller.js";

const router = Router();

router.get("/", ViewsController.renderHome);
router.get("/login", showAuthView, ViewsController.renderLogin);
router.get("/signup", showAuthView, ViewsController.renderSignup);
router.get("/profile", checkUserAuthenticatedView , ViewsController.renderProfile);
router.get("/current", checkUserAuthenticatedView, ViewsController.renderProfile);

export {router as viewsRouter};