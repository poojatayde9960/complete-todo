// const { getAllTodos } = require("../controllers/todo.controller")
// const { getTodo, addTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller")

const { getAllTodos, addTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller")
const { userprotected } = require("../middlewares/auth.middleware")

const router = require("express").Router()
router
    .get("/getTodo", userprotected, getAllTodos)
    .post("/addTodo", userprotected, addTodo)
    .put("/updateTodo/:id", userprotected, updateTodo)
    .delete("/deleteTodo/:id", userprotected, deleteTodo)
module.exports = router