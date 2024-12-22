const userModel = require("../models/user_model")

const getAllStudent = async (req, res) => {
    try {
        const student =
            await userModel.getAllStudent()
        if (!student) res.json({ message: 'Student Not Found' })
        res.json(student)
    }
    catch (error) {
        console.log(error);
        req.json({ message: 'Error Get All Student' })
    }
}

const getStudentById = async (req, res) => {
    try {
        const student =
            await userModel.getStudentById(req.params.id)
        if (student.length > 0) {
            res.status(200).json({ message: 'Sukses', student })
        }
        else {
            res.status(500).json({ message: 'Student Not Found' })
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error Get Student' })
    }
}

const addStudent = async (req, res) => {
    try {
        const newStudent = await userModel.addStudent(req.body)
        res.status(200).json({ id: newStudent, ...req.body })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error Insert Student' })
    }
}

const deleteStudent = async (req, res) => {
    const { id } = req.params
    try {
        const deletedCount = await userModel.deleteStudentById(id)
        if (deletedCount > 0) {
            res.status(200).json({ message: "Student deleted successfully" })
        } else {
            res.status(404).json({ message: "Student not found" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllStudent,
    getStudentById,
    addStudent,
    deleteStudent
}