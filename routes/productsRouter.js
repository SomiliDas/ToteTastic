const express = require("express")
const router = express.Router()

let productModel = require("../models/product-model")

let {addToCart} = require("../controllers/productController")
const isLoggedIn = require("../middlewares/isLoggedIn")



router.get("/addToCart/:id",isLoggedIn, addToCart)




module.exports = router