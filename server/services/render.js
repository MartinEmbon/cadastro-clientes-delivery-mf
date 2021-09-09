const axios = require("axios")
//axios.get("https://localhost:3000/api/users")
//axios.get("https://crud-delivery.herokuapp.com/api/users")
exports.homeRoutes=(req,res)=>{
    //mage a get req to the /api/users
    axios.get("https://crud-delivery.herokuapp.com/api/users")
        .then(response=>{
            //console.log(response.data)            
            res.render("index",{users:response.data})        
        })
        .catch(err=>{
            res.send(err)
        })
    
}

exports.add_user=(req,res)=>{
    res.render("add_user")
}

exports.update_user = (req, res) =>{
    axios.get('https://crud-delivery.herokuapp.com/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})            
        })
        
        .catch(err =>{
            res.send(err);
        })
}

//axios.get('https://crud-delivery.herokuapp.com/api/users', { params : { id : req.query.id }})
