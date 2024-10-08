const { Router } = require("express");
const router = Router();
const categoriesController = require("../controllers/categoriesController");
const productsController = require("../controllers/productsController");

router.get("/", categoriesController.categoriesGet);

router.get("/create", categoriesController.categoriesCreateGet);
router.post("/create", categoriesController.categoriesCreatePost);

router.get("/:id/update", categoriesController.categoriesUpdateGet);
router.post("/:id/update", categoriesController.categoriesUpdatePost);

router.post("/:id/delete", categoriesController.categoriesDeleteGet);

//PRODUCTS
router.get("/category/:id", productsController.productsGet);

router.get("/category/:id/create", productsController.productsCreateGet);
router.post("/category/:id/create", productsController.productsCreatePost);

router.get("/category/:id/update/:id2", productsController.productsUpdateGet);
router.post("/category/:id/update/:id2", productsController.productsUpdatePost);

router.post("/category/:id/delete/:id2", productsController.productsDeletePost);

module.exports = router;
