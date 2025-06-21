const express = require("express")
const router = express.Router()


const {register} = require("../controllers/authController")
const {login} = require("../controllers/authController")
const {logout} = require("../controllers/authController")

const isLoggedIn = require("../middlewares/isLoggedIn")





router.post("/register", register)

router.post("/login", login)

router.get("/logout", isLoggedIn, logout)

module.exports = router
