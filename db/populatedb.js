#! /usr/bin/env node
const { Client } = require("pg");
require('dotenv').config()

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category VARCHAR (255) NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  product VARCHAR ( 255 ) NOT NULL,
  fk_category INT,
  FOREIGN KEY(fk_category) REFERENCES categories(id)
);

INSERT INTO categories (name)
VALUES
  ('Paper');

INSERT INTO product (name, fk_category) 
VALUES
  ('Toilet paper roll', 1),
  ('Paper towels', 1),
  ('Paper tissues', 1);



`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://"+ process.env.ROOT_NAME +":" + process.env.PASS + "@"+ process.env.LOCAL_CONNECTION + "/" + process.env.DB,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();