let mongoose = require("mongoose");


let userSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    }
})

let user = mongoose.model("userSchema", userSchema);
module.exports = user;