const express = require("express");
const router = express.Router();
const controllers = require("../controllers/user.controller") ;


router.post("/register", controllers.register);

module.exports = router;