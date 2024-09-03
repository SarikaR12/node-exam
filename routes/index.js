let express = require("express");
let routes = express.Router();
let userRoute = require("./user.route")
let categoryRoute = require("./category.route")
let subcategoryRoute = require("./subcategory.route");
let productRoute = require("./product.route");



routes.use("/user", userRoute);
routes.use("/category", categoryRoute);
routes.use("/subcategory", subcategoryRoute);
routes.use("/product", productRoute);


module.exports = routes;