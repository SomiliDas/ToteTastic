const express = require("express")
const router = express.Router()


const isLoggedIn = require("../middlewares/isLoggedIn")

const productModel = require("../models/product-model")
const userModel = require("../models/user-model")

router.get("/", (req, res)=>{
    res.render("index")
})


router.get("/shop", isLoggedIn, async (req, res)=>{
    let products = await productModel.find()
    res.render("shop", {products})
})


router.get("/cart", isLoggedIn, async(req, res)=>{
    try{
        let user = await userModel.findOne({email : req.user.email})
        let products = []
        for(let eachProdId of user.cart){
            let product = await productModel.findOne({_id : eachProdId})
            products.push(product)
        }
            
            res.render("cart" , {products})
        
    }catch(err){
        res.send(err.message)
    }
})




module.exports = router

