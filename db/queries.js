const pool = require("./pool");

async function getAll(table) {
  const { rows } = await pool.query(`SELECT * FROM ${table} ORDER BY id`);
  return rows;
}

//CATEGORY
async function addCategory(category) {
  await pool.query("INSERT INTO category (name) VALUES ($1)", [category]);
}

async function getCategory(id) {
  const { rows } = await pool.query("SELECT * FROM category WHERE id=($1)", [
    id,
  ]);
  return rows[0];
}

async function updateCategory(id, name) {
  await pool.query("UPDATE category SET name = ($1) WHERE id = ($2)", [
    name,
    id,
  ]);
}

async function deleteCategory(id) {
  try {
    await pool.query("DELETE FROM category WHERE id=($1)", [id]);
  } catch (error) {
    if (error.message.includes("product_fk_category_fkey")) {
      console.log("Cannot delete category with items!");
    }
  }
}

//PRODUCT
async function getProduct(productId) {
  const { rows } = await pool.query("SELECT * FROM product WHERE id=($1)", [
    productId,
  ]);
  return rows[0];
}

async function getProducts(categoryId) {
  const { rows } = await pool.query(
    "SELECT * FROM product WHERE fk_category=($1)",
    [categoryId]
  );
  return rows;
}

async function addProductInCategory(categoryId, productName) {
  await pool.query("INSERT INTO product (name, fk_category) VALUES ($1, $2)", [
    productName,
    categoryId,
  ]);
}

async function updateProduct(id, name) {
  await pool.query("UPDATE product SET name = ($1) WHERE id = ($2)", [
    name,
    id,
  ]);
}

async function deleteProduct(id) {
  await pool.query("DELETE FROM product WHERE id=($1)", [id]);
}

module.exports = {
  getAll,
  addCategory,
  getCategory,
  updateCategory,
  deleteCategory,
  getProduct,
  getProducts,
  addProductInCategory,
  updateProduct,
  deleteProduct,
};
