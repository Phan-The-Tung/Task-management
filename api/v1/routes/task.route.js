const express = require("express");
const router = express.Router();
const controllers = require("../controllers/task.controller") ;


router.get("/", controllers.index);

router.get("/detail/:id", controllers.detail);

router.patch("/change-status/:id", controllers.changeStatus);

router.patch("/change-multi", controllers.changeMulti);

router.post("/create", controllers.create);

router.patch("/edit/:id", controllers.edit);

router.delete("/delete/:id", controllers.delete);

module.exports = router;