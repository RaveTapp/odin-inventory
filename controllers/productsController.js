const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

const productsGet = async (req, res) => {
  const category = await db.getCategory(req.params.id);
  const products = await db.getProducts(category.id);
  res.render("products", { products, category });
};

module.exports = {
  productsGet,
}