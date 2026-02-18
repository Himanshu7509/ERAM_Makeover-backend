const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phonenumber: {
            type: String,
            required: true,
        },
        service: {
            type: String,
            required: true,
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
