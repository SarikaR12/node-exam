const User = require("../models/user.model")
let jwt = require("jsonwebtoken")

let get_user = async (req, res) => {
    try {
        let user = await User.find()
        res.status(200).json({
            message: "user get success",
            user,
        })
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

let add_user = async (req, res) => {
    try {
        let body = req.body;
        let user = await User.create(body)

        res.status(201).json({
            message: "user add success",
            user,
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

let delete_user = async (req, res) => {
    try {
        let { id } = req.params;
        let user = await User.findByIdAndDelete(id);

        res.status(200).json({
            message: "user delete success",
            user,
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

let update_user = async (req, res) => {
    try {

        let { id } = req.params;
        let body = req.body;

        let data = await User.findByIdAndUpdate(id, body);

        let user = {
            id,
            ...body,
        }

        res.status(200).json({
            message: "user update success",
            user
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

let user_login = async (req, res) => {
    try {

        let { email, password } = req.body;

        let user = await User.findOne({ email })

        if (!user || user.password == password) {
            throw new Error("user && password is not invalid");
        }
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = { get_user, add_user, delete_user, update_user, user_login }