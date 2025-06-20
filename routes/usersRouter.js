const express = require("express")
const router = express.Router()

let userModel = require("../models/user-model")

router.get("/", (req, res)=>{
    res.send("hello user")
})


module.exports = router