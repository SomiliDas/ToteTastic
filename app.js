const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const app = express()
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res)=>{
    res.send("meow")
})

app.listen(3000)