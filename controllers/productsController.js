const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

const productsGet = async (req, res) => {
  const products = await db.getAll("product");
  res.render("products", { products });
};

module.exports = {
  productsGet,
}