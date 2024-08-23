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
]; //Doesn't allow space

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

const productsUpdateGet = async (req, res) => {
  const product = await db.getProduct(req.params.id2);
  res.render("updateProduct", {
    title: "Update product",
    categoryId: req.params.id,
    product: product,
  });
}

const productsUpdatePost = [
  validateProduct,
  async (req, res) => {
    const product = await db.getProduct(req.params.id2);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("updateProduct", {
        title: "Update product",
        categoryId: req.params.id,
        product: product,
        errors: errors.array(),
      });
    }
    const { productName } = req.body;
    await db.updateProduct(req.params.id2, productName);
    res.redirect("/category/" + req.params.id);
  },
];

const productsDeletePost = async (req, res) => {
  await db.deleteProduct(req.params.id2);
  res.redirect("/category/" + req.params.id);
}


module.exports = {
  productsGet,
  productsUpdateGet,
  productsUpdatePost,
  productsCreateGet,
  productsCreatePost,
  productsDeletePost,
}