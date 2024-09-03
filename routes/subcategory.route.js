let express = require("express");
const { getSubcategory, createSubcategory, deleteSubcategory, updateSubcategory } = require("../controller/subcategory.controller");
let route = express.Router();

route.get("/get", getSubcategory);
route.post("/post", createSubcategory);
route.delete("/delete/:id", deleteSubcategory);
route.put("/update/:id",updateSubcategory);


module.exports = route;