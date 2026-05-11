const express = require("express");
// const {Router} = require("express");
const router = express.Router();
// const router = Router();
const authController = require("../controllers/auth.controller");

const authMiddleware = require("../middlewares/auth.middleware");

router.post("/register",authController.registerController);
router.post("/login",authController.loginController);
router.get("/get-me",authMiddleware.authUser,authController.getMeController);
router.get("/logout",authController.logOutController)

module.exports = router;