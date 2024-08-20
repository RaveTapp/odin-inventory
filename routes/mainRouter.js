const { Router } = require("express");
const router = Router();
//const usersController = require("../controllers/usersController");

router.get("/", usersController.categoriesGet);

//router.get("/new", usersController.usersNewGet);

//router.post("/new", usersController.usersNewPost);

//router.get("/delete", usersController.usersDeleteGet);

module.exports = router;