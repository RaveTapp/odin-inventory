const pool = require("./pool");

async function getAll(table) {
  const { rows } = await pool.query("SELECT * FROM ($1)", [table]);
  return rows;
}
