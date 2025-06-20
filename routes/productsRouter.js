const express = require("express")
const router = express.Router()

router.get("/", (req,res)=>{
    res.send("hello product")
})


module.exports = router