const uploadImage = require("../middleware/cloudinary.config");
let cloudinary = require("../middleware.js/coludinary.config");
const { productSchema } = require("../models");


let getProduct = async (req, res) => {
    try {
        let product = await productSchema.find();
        res.status(200).json({
            message: "product get success",
            product,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

let createProduct = async (req, res) => {
    try {
        let body = req.body;
        console.log(req.file);
        let { path, originalname } = req.file;
        let cloud = await uploadImage(path, originalname)

        let newBody = {
            ...body,
            profile: cloud.url,
        }

        let product = await productSchema.create(newBody);
        res.status(201).json({
            message: "product create sucess",
            product,
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


let deleteProduct = async (req, res) => {
    try {
        let { id } = req.params;

        let FindById = await Product.findById(id);
        await cloudinary.uploader.destroy(FindById.public_id)
        let product = await Product.findByIdAndDelete(id);

        res.status(200).json({
            message: "product delete sucess",
            product
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

let updateProduct = async (req, res) => {
    try {

        let { id } = req.params;
        let body = req.body;
        if (req.file) {

            let old = await Product.findById(id)
            await cloudinary.uploader.destroy(old.public_id)
            let imageUrl = await cloudinary.uploader.upload(req.file.path);

            let newBody = {
                id,
                ...body,
                image: imageUrl.secure_url,
                public_id: imageUrl.public_id
            }

            let product = await Product.findByIdAndUpdate(id, {
                ...body,
                image: imageUrl.secure_url,
                public_id: imageUrl.public_id
            })

            res.status(200).json({
                message: "product update success",
                newBody,
            })
        }
        else {

            let old = await Product.findById(id);

            let newBody = {
                id,
                ...body,
                image: old.secure_url,
                public_id: old.public_id
            }
            console.log(newBody);

            let product = await Product.findByIdAndUpdate(id, {
                ...body,
                image: old.secure_url,
                public_id: old.public_id
            })

            res.status(200).json({
                message: "product update success",
                newBody
            })
        }
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


module.exports = { getProduct, createProduct, deleteProduct, updateProduct }