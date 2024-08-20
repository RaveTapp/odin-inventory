const { Router } = require("express");
const categoryRouter = Router();
const prodcutsController = require("../controllers/prodcutsController");

categoryRouter.get("/:id", prodcutsController.prodcutsGet);


module.exports = categoryRouter;