let mongoose = require("mongoose");

let productSchema = mongoose.Schema({

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorySchema",
        required: true,
    },
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategorySchema",
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    qty: {
        type: Number,
        default: 1,
    },
    image: {
        type: String,
    },
    public_id: {
        type: String,
    }
})

let Product = mongoose.model("productSchema", productSchema);
module.exports = Product;