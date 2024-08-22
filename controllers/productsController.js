const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

const productsGet = async (req, res) => {
  const category = await db.getCategory(req.params.id);
  const products = await db.getProducts(category.id);
  res.render("products", {  products, category });
};

const productsCreateGet = async (req, res) => {
  res.render("createProduct", {title: "Create product in current category", categoryId: req.params.id});
}

const validateProduct = [
  body("productName")
    .isAlpha()
    .withMessage("Product must only contain letters"),
];

const productsCreatePost = [validateProduct, async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
      return res.status(400).render("createProduct", {
          title: "Create product in current category",
          errors: errors.array(),
          categoryId: req.params.id
      });
  }
  const {productName} = req.body;
  await db.addProductInCategory(req.params.id, productName);
  res.redirect("/category/" + req.params.id);
}];

module.exports = {
  productsGet,
  productsCreateGet,
  productsCreatePost,
}