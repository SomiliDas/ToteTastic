const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const app = express()
const db = require("./config/mongoose-connection")
const ownersRouter = require("./routes/ownersRouter")
const usersRouter = require("./routes/usersRouter")
const productsRouter = require("./routes/productsRouter")

app.set("view engine", "ejs")

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname, "public")))

let userModel = require("./models/user-model")
let productModel = require("./models/product-model")


app.use("/owners", ownersRouter)
app.use("/users", usersRouter)
app.use("/products", productsRouter)



app.listen(3000)