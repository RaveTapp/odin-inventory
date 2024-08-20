const db = require("../db/queries");

const categoriesGet = async (req, res) => {
  const categories = await db.getAll("category");
  res.render("categories", { categories });
};

const categoriesCreateGet = async (req, res) => {
  res.render("createCategory", {
    title: "Create category",
  });
};

module.exports = {
  categoriesGet,
  categoriesCreateGet,
};
