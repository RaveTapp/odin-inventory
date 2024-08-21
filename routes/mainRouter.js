const { Router } = require("express");
const router = Router();
const categoriesController = require("../controllers/categoriesController");
const productsController = require("../controllers/productsController");

router.get("/", categoriesController.categoriesGet);

router.get("/create", categoriesController.categoriesCreateGet);
router.post("/create", categoriesController.categoriesCreatePost);

router.get("/:id/update", categoriesController.categoriesUpdateGet);
router.post("/:id/update", categoriesController.categoriesUpdatePost);

//router.get("/delete", categoriesController.usersDeleteGet);

router.get("/category/:id", productsController.productsGet);

module.exports = router;
