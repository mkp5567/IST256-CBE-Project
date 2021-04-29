//content was taken from lecture and demo videos retreval date: 4/28/21 for CRUD.

const mongoose = require("../db");
const schema = new mongoose.Schema(
    {
        name: {
            desc: "First and Last",
            trim: true,
            type: String,
            require: true,
        },
        email: {
            trim: true,
            type: String,
            require: true,
        },
        birthDate: {
            trim: true,
            type: Date,
            default: Date.now,
            require: true,
        },
        address: {
            desc: "Include state and zip code",
            trim: true,
            type: String,
            require: true,
        },
        phoneNumber: {
            trim: true,
            type: String,
            require: true,
        },
    }
)

module.exports = mongoose.model("member",schema);


