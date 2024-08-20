const { Router } = require("express");
const router = Router();
const categoriesController = require("../controllers/categoriesController");

router.get("/", categoriesController.categoriesGet);

//router.get("/new", usersController.usersNewGet);

//router.post("/new", usersController.usersNewPost);

//router.get("/delete", usersController.usersDeleteGet);

module.exports = router;