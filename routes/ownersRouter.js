const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")

let ownerModel = require("../models/owner-model")
const { createAdmin } = require("../controllers/authController")
const {createProduct} = require("../controllers/productController")

const isLoggedIn = require("../middlewares/isLoggedIn")
const upload = require("../config/multer")


if(process.env.NODE_ENV === "development"){
    router.post("/create", createAdmin)
}

router.get("/admin", (req, res)=>{
    res.render("create-products")
})


router.post("/product/create", upload.single("image"), createProduct)










module.exports = router