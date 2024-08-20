const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

const categoriesGet = async (req, res) => {
  const categories = await db.getAll("category");
  res.render("categories", { categories });
};

const categoriesCreateGet = async (req, res) => {
  res.render("createCategory", {
    title: "Create category",
  });
};

const validateCategory = [
  body("categoryName")
    .isAlpha()
    .withMessage("Category must only contain letters"),
];

const categoriesCreatePost = [validateCategory, async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).render("createCategory", {
            title: "Create category",
            errors: errors.array(),
        });
    }
    const {categoryName} = req.body;
    await db.addCategory(categoryName);
    res.redirect("/");
}];

module.exports = {
  categoriesGet,
  categoriesCreateGet,
  categoriesCreatePost,
};
