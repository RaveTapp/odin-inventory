const pool = require("./pool");

async function getAll(table) {
  const { rows } = await pool.query(`SELECT * FROM ${table}`);
  return rows;
}


module.exports = {
    getAll,

}