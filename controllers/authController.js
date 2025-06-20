const bcrypt = require("bcrypt")
let userModel = require("../models/user-model")
const {generateToken} = require("../utils/generateToken")


let signUp = async(req, res)=>{
    let {fullname, email, password} = req.body
    let user = await userModel.findOne({email})
    if(user){
        res.status(500).send("Already Exists! Please Login")
    }
    else{
        try{

            bcrypt.genSalt(10, (err, salt)=>{
                bcrypt.hash(password, salt, async(err, hash)=>{
                    if(err){
                        res.status(500).send(err.message)
                    }
                    else{
                        let createdUser = await userModel.create({
                            fullname,
                            email,
                            password : hash
                        })

                        let token = generateToken(createdUser)
                        res.cookie("token", token)

                        res.status(200).send(createdUser)
                    }

                })
            })

        } catch(err){
            console.log(err.message)
        }
    }

}


let login = async(req, res)=>{
    let {email, password} = req.body
    try{
        let user = await userModel.findOne({email})
        if(!user){
            res.status(500).send("Something went wrong")
        }
        else{
            let pass = await bcrypt.compare(password, user.password)
            if(pass){
                let token = generateToken(user)
                res.cookie("token", token)
                res.status(200).send(user)
                
            }
            else{
                res.status(500).send("Something went wrong")
            }
        }
    } catch(err){
        console.log(err.message)
    }
}






module.exports = {signUp, login}


