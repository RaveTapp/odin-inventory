const db = require("../db/queries");

const categoriesGet = async(req, res) => {
    const categories = await db.getAll("category");
    console.log(categories);
}


module.exports = {
    categoriesGet,
}