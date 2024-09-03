const Category = require("../models/category.model")

let getCategory = async (req, res) => {
    try {
        let category = await categorySchema.find()
        res.status(200).json({
            message: "category get success",
            category,
        })
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

let postCategory = async (req, res) => {
    try {

        let body = req.body;
        let duplicate = body.categoryName;


        let FindByCategory = await Category.findOne({ categoryName: duplicate });

        if (FindByCategory) {
            res.status(401).json({
                message: "this category alreay exsited"
            })
        } else {
            let category = await Category.create(body);
            res.status(201).json({
                message: "category create success",
                category,
            })
        }


    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


let deleteCategory = async (req, res) => {
    try {

        let { id } = req.params;

        let category = await Category.findByIdAndDelete(id)

        res.status(200).json({
            message: "category delete Success",
            category,
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

let updateCategory = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;

        let data = await Category.findByIdAndUpdate(id, body)

        let category = {
            id,
            ...body
        }

        res.status(200).json({
            message: "category update success",
            category
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = { getCategory, postCategory, deleteCategory, updateCategory }