const express = require("express")
const router = express.Router()

let productModel = require("../models/product-model")


router.get("/", (req,res)=>{
    res.send("hello product")
})


module.exports = router