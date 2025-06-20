const express = require("express")
const router = express.Router()


const {signUp} = require("../controllers/authController")
const {login} = require("../controllers/authController")

router.get("/", (req, res)=>{
    res.send("hello user")
})



router.post("/register", signUp)

router.post("/login", login)

module.exports = router
