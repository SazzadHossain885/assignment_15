const express = require("express");
const router = express.Router();
const {createStudent, readStudent, updateStudent, deleteStudent, readStudentById} = require("../controllers/StudentController");


router.post("/create", createStudent);
router.get("/read", readStudent);
router.get("/readById/:id", readStudentById);
router.put("/update/:id", updateStudent);
router.delete("/delete/:id", deleteStudent);


module.exports = router;