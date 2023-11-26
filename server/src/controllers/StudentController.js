const StudentModel = require("../models/StudentModel");


exports.createStudent = async(req, res) => {
    try {
        const result = await StudentModel.create(req.body);    
        res.status(200).json({status: "success", data: result});
    } 
    catch (error) {
        res.status(400).json({status: "fail", data: error});
    }

}


exports.readStudent = async(req, res) => {
    try {
        const result = await StudentModel.find({});    
        res.status(200).json({status: "success", data: result});
    } 
    catch (error) {
        res.status(400).json({status: "fail", data: error});
    }

}


exports.readStudentById = async(req, res) => {
    try {
        const result = await StudentModel.findOne({_id: req.params.id});    
        res.status(200).json({status: "success", data: result});
    } 
    catch (error) {
        res.status(400).json({status: "fail", data: error});
    }

}


exports.updateStudent = async(req, res) => {
    try {
        const result = await StudentModel.updateOne({_id: req.params.id}, req.body);    
        res.status(200).json({status: "success", data: result});
    } 
    catch (error) {
        res.status(400).json({status: "fail", data: error});
    }

}


exports.deleteStudent = async(req, res) => {
    try {
        const result = await StudentModel.deleteOne({_id: req.params.id});    
        res.status(200).json({status: "success", data: result});
    } 
    catch (error) {
        res.status(400).json({status: "fail", data: error});
    }

}