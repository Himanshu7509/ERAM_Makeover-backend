const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
        },
        email: {
            type: String,
        },
        phonenumber: {
            type: String,
        },
        service: {
            type: String,
        },
        message: {
            type: String,
        },
        date: {
            type: String,
        },
        time: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
