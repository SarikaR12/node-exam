let express = require("express");
let multer = require("multer");
const { getProduct, createProduct, deleteProduct, updateProduct } = require("../controller/product.controller");
let storage = multer.diskStorage({})
let upload = multer({ storage: storage }).single('image')


let route = express.Router();

route.get("/get", getProduct);
route.post("/post", upload, createProduct);
route.delete("/delete/:id", deleteProduct);
route.put("/update/:id", upload, updateProduct)


module.exports = route;