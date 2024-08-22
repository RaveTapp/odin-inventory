const pool = require("./pool");

async function getAll(table) {
  const { rows } = await pool.query(`SELECT * FROM ${table} ORDER BY id`);
  return rows;
}

async function addCategory(category) {
  await pool.query("INSERT INTO category (name) VALUES ($1)", [category]);
}

async function getCategory(id) {
  const { rows } = await pool.query("SELECT * FROM category WHERE id=($1)", [
    id,
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

async function updateCategory(id, name) {
  await pool.query("UPDATE category SET name = ($1) WHERE id = ($2)", [
    name,
    id,
  ]);
}

async function deleteCategory(id) {
  await pool.query("DELETE FROM category WHERE id=($1)", [id]);
}

module.exports = {
  getAll,
  addCategory,
  getCategory,
  getProducts,
  updateCategory,
  deleteCategory,
};
