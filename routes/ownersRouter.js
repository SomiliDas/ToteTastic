const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")

let ownerModel = require("../models/owner-model")



if(process.env.NODE_ENV === "development"){
    router.post("/create", async(req,res)=>{
        let {fullname, email, password} = req.body
        let owners = await ownerModel.find()
        if(owners.length > 0){
            res.status(500).send("Access Denied!")
        }
        else{
            bcrypt.genSalt(10, (err, salt)=>{
                bcrypt.hash(password, salt, async(err, hash)=>{
                    let createdOwner =await ownerModel.create({
                                                fullname,
                                                email,
                                                password : hash
                                            })
                    res.status(200).send(createdOwner)
                })
            })
        }
        
    })
}





router.get("/", (req, res)=>{
    res.send("hello owner")
})






module.exports = router