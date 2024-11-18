const Todo = require("../models/Todo")

exports.addTodo = async (req, res) => {
    await Todo.create({ ...req.body, userId: req.user })
    res.json({ message: "add todo success" })
}

exports.getAllTodos = async (req, res) => {
    const result = await Todo.find({ userId: req.user })
    res.json({ message: "getAll todo success", result })
}
exports.updateTodo = async (req, res) => {
    const { id } = req.params
    await Todo.findByIdAndUpdate(id, req.body)
    res.json({ message: "update todo success" })
}
exports.deleteTodo = async (req, res) => {
    const { id } = req.params
    await Todo.findByIdAndDelete(id)

    res.json({ message: "delete todo success" })
}