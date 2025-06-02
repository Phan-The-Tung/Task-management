const express = require("express");
const router = express.Router();
const controllers = require("../controllers/user.controller") ;
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/register", controllers.register);

router.post("/login", controllers.login);

router.post("/password/forgot", controllers.forgotPassword);

router.post("/password/otp", controllers.otpPassword);

router.post("/password/reset", controllers.resetPassword);

router.get("/detail", authMiddleware.requireAuth, controllers.detail);

module.exports = router;