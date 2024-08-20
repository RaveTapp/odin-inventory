const { Router } = require("express");
const router = Router();
const categoriesController = require("../controllers/categoriesController");

router.get("/", categoriesController.categoriesGet);

router.get("/create", categoriesController.categoriesCreateGet);

router.post("/create", categoriesController.categoriesCreatePost);

//router.get("/delete", categoriesController.usersDeleteGet);

module.exports = router;