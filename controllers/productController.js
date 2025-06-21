
const productModel =  require("../models/product-model")


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


module.exports = createProduct