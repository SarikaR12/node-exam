const { subcategorySchema } = require("../models");


let getSubcategory = async (req, res) => {
    try {
        let category = await subcategorySchema.find().populate("category");

        res.status(200).json({
            message: "categ get success",
            category,
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

let createSubcategory = async (req, res) => {
    try {

        let body = req.body;

        let category = await subcategorySchema.create(body);

        res.status(201).json({
            message: "category added success",
            category,
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

let deleteSubcategory = async (req, res) => {
    try {
        let { id } = req.params;

        let category = await subcategorySchema.findByIdAndDelete(id)

        res.status(200).json({
            message: "delete category success",
            category,
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

let updateSubcategory = async (req, res) => {
    try {

        let { id } = req.params;;
        let body = req.body;

        let data = await subcategorySchema.findByIdAndUpdate(id, body)

        let category = {
            id,
            ...body,
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



module.exports = { getSubcategory, createSubcategory, deleteSubcategory, updateSubcategory };