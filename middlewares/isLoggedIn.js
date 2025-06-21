const jwt = require("jsonwebtoken")
const userModel = require("../models/user-model")


let isLoggedIn = async(req, res, next)=>{
    if(req.cookies.token == "" || !req.cookies.token){
        return res.redirect("/")
    }
    else{
        try{
            let data = jwt.verify(req.cookies.token, process.env.JWT_KEY)
            let user = await userModel.findOne({email : data.email}).select("-password")
            if(!user){
                return res.redirect("/")
            }
            else{
                req.user = user
                next()
            }
        } catch(err){
            console.log(err.message)
            return res.redirect("/")
        }
    }
}

module.exports = isLoggedIn
