const pool = require("./pool");

async function getAll(table) {
  const { rows } = await pool.query(`SELECT * FROM ${table}`);
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

async function getProducts(categoryId){
    const { rows } = await pool.query("SELECT * FROM product WHERE fk_category=($1)", [
    categoryId,
  ]);
    return rows;
}

module.exports = {
  getAll,
  addCategory,
  getCategory,
  getProducts,
};
