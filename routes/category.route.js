let express = require("express");
const { getCategory, postCategory, deleteCategory, updateCategory } = require("../controller/category.controller");

let route = express.Router();

route.get("/get", getCategory);
route.post("/post", postCategory);
route.delete("/delete/:id", deleteCategory)
route.put("/put/:id", updateCategory)



module.exports = route;