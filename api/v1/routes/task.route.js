const express = require("express");
const router = express.Router();
const controllers = require("../controllers/task.controller") ;


router.get("/", controllers.index);

router.get("/detail/:id", controllers.detail);

module.exports = router;