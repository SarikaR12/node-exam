let mongoose = require("mongoose");

let categorySchema = mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
    }
})

let Category = mongoose.model("categorySchema", categorySchema);

module.exports = Category;