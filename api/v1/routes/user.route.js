const express = require("express");
const router = express.Router();
const controllers = require("../controllers/user.controller") ;


router.post("/register", controllers.register);

router.post("/login", controllers.login);

router.post("/password/forgot", controllers.forgotPassword);

router.post("/password/otp", controllers.otpPassword);

router.post("/password/reset", controllers.resetPassword);

module.exports = router;