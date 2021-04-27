//copied from zyBooks figure 11.8.7

// models/student.js
//const mongoose = require("../db");
//const schema = mongoose.schema(
const mongoose = require('mongoose');
const MemberSchema = mongoose.Schema({
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

/*const Student = db.model("Student", {
    name:      String,
    gpa:       { type: Number, min: 0, max: 4 },
    birthDate: { type: Date, default: Date.now },
    interests: [ String ]
});

module.exports = Student;*/


