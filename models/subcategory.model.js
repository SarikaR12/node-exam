let mongoose = require("mongoose");

let subcategorySchema = mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorySchema",
        required: true,
    },
    subcategory: {
        type: String,
        required: true,
    }
})

let subCategory = mongoose.model("subcategorySchema", subcategorySchema);
module.exports = subCategory;