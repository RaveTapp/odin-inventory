const { Pool } = require("pg");
require('dotenv').config()

module.exports = new Pool({
  connectionString:
    "postgresql://" +
    process.env.ROOT_NAME +
    ":" +
    process.env.PASS +
    "@" +
    process.env.LOCAL_CONNECTION +
    "/" +
    process.env.DB,
});
