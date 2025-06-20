const mongoose = require("mongoose")
let DBURL = require("../.env")

mongoose.connect(DBURL)
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err)
})

module.exports = mongoose.connection