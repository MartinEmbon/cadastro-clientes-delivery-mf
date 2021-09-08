const mongoose=require("mongoose")

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    endereco:{
        type:String,
        required:true   
             
    },
    taxa:{
        type:String,
             
    },

    telefone:{
        type:String,
        required:true        
    },
   
    //gender:String,
    obs:String,
    status:String
        
    
})

const Userdb = mongoose.model("userdatabase",schema)

module.exports=Userdb
