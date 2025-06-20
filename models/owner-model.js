let mongoose = require("mongoose")

let ownerSchema = mongoose.Schema({
    fullname : {
        type : String,
        required : true,
        minLength: 3,
        trim: true
    },
    email : {
        type: String,
        required : true
    },
    password : {
        type: String,
        required : true
    },
    orders : {

        type : Array,
        default: []
    },
    gstin : {
        type : Number
    },
    picture : String

})

module.exports = mongoose.model("owner", ownerSchema)