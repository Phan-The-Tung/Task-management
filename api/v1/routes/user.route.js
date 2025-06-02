const express = require("express");
const router = express.Router();
const controllers = require("../controllers/user.controller") ;


router.post("/register", controllers.register);

router.post("/login", controllers.login);

router.post("/password/forgot", controllers.forgotPassword);

module.exports = router;