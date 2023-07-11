import { Router } from "express";
import passport from "passport";
import { SessionsController } from "../controllers/sessions.controller.js";

const router = Router();

router.post("/signup", passport.authenticate("signupStrategy",{
    failureRedirect:"/api/sessions/failed-signup"
}), SessionsController.signupUsers );

router.get("/failed-signup",SessionsController.failSignup);

router.post("/login", passport.authenticate("loginStrategy",{
    failureRedirect:"/api/sessions/failed-login"
}), SessionsController.loginUsers);

router.get("/failed-login", SessionsController.failLogin);

router.get("/logout", SessionsController.logoutUser);

export {router as sessionsRouter};