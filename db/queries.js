const pool = require("./pool");

async function getAll(table) {
  const { rows } = await pool.query(`SELECT * FROM ${table}`);
  return rows;
}

async function addCategory(category){
    await pool.query("INSERT INTO category (name) VALUES ($1)", [category]);
}

module.exports = {
    getAll,
    addCategory,
}