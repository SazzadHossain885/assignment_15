const {Schema, model} = require("mongoose");

const StudentSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    gender: {type: String},
    dateOfBirth: {type: String},
    nationality: {type: String},
    address: {type: String},
    email: {type: String},
    phone: {type: String},
    admissionDate: {type: String},
    courses: {type: String},
    }, 
    {versionKey: false}
)

const StudentModel = model("student", StudentSchema);

module.exports = StudentModel;