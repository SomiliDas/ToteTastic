const jwt = require("jsonwebtoken")

let generateToken = (user)=>{
    return jwt.sign({email : user.email , userid : user._id}, process.env.JWT_KEY)
}

module.exports = {generateToken}