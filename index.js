const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config()  ///thise will allow proccess.env ke andar he variable axcces hogya

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: "http://localhost:5173", credentials: true }))

app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/todo", require("./routes/todo.route"))

app.use("*", (req, res) => {
    res.status(404).json({ message: `route not found:${req.method}:${req.url}` })
})
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("mongoose connect");

})
app.listen(process.env.PORT, console.log("server running 🏃‍♀️")
)