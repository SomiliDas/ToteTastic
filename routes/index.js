const express = require("express")
const router = express.Router()


const isLoggedIn = require("../middlewares/isLoggedIn")

const productModel = require("../models/product-model")

router.get("/", (req, res)=>{
    res.render("index")
})


router.get("/shop", isLoggedIn, async (req, res)=>{
    let products = await productModel.find()
    res.render("shop", {products})
})

module.exports = router
