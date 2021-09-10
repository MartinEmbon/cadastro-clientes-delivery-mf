const mongoose=require("mongoose")

var schema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true                
    }    
})

const UserLogin= mongoose.model("Userlogin",schema)

module.exports=UserLogin
