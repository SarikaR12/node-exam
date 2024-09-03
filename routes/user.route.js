let express = require("express");
const { get_user, add_user, delete_user, update_user, user_login } = require("../controller/user.controller");
let route = express.Router();

route.get("/get", get_user);
route.post("/register", add_user)
route.delete("/delete/:id", delete_user)
route.put("/update/:id", update_user)
route.post("/login", user_login)


module.exports = route;