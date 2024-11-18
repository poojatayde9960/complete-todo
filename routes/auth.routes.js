const { register, logout, login } = require("../controllers/auth.controller")

const router = require("express").Router()
router
    .post("/signup", register)
    .post("/signin", login)
    .post("/signout", logout)
module.exports = router