let mongoose = require("mongoose")
let userSchema = mongoose.Schema({
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
    cart :{
            type : Array,
            default: []
    },

    isadmin : Boolean,
    orders : {
            type : Array,
            default: []
    },
    contact : {
        type : Number,
        required : true
    },
    picture : String

})

module.exports = mongoose.model("user", userSchema)