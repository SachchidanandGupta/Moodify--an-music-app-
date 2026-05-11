const express = require("express");
// const {Router} = require("express");
const router = express.Router();
// const router = Router();
const authController = require("../controllers/auth.controller");

router.post("/register",authController.registerController);
router.post("/login",authController.loginController);

module.exports = router;