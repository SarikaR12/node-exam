let mongoose = require("mongoose");

let dbConnect = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log("database connect success");

    })
        .catch((err) => {
            console.log("error", err);
        })
}
module.exports = dbConnect;