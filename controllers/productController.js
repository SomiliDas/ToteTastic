
const productModel =  require("../models/product-model")
const userModel =  require("../models/user-model")


let createProduct = async(req, res)=>{
    let {name, price, discount, bgcolor, panelcolor, textcolor} = req.body
    try{
        let product = await productModel.create({
            name,
            price,
            discount,
            bgcolor,
            panelcolor,
            textcolor,
            image : req.file.buffer

        })
        res.status(200).redirect("/shop")
    } catch(err){
        console.log(err.message)
        res.redirect("/owners/admin")
    }
}


let addToCart = async(req, res)=>{
    try{
        let user = await userModel.findOne({email : req.user.email})
        let id = req.params.id
        user.cart.push(id)
        await user.save()
        res.status(200).redirect("/shop")
    } catch(err){
        res.status(500).send(err.message)
    }

}





module.exports = {createProduct, addToCart}