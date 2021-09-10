const axios = require("axios")
const bcrypt = require("bcrypt")
var UserLogin = require("../model/user")

exports.index=(req,res)=>{
    res.render("index",{title:"Home"})
}

exports.pageNotFound=(req,res)=>{
     res.redirect("/login")    
}

exports.login=(req,res)=>{    
    const response = {
        title:"Login",
        error:req.query.error
    }
    res.render("login",response)
}

exports.logout=(req,res)=>{
    req.logout();
	res.redirect('/');
}

exports.loginpost=(req,res)=>{
    res.redirect("/")
}



exports.homeRoutes=(req,res)=>{    
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



/*

exports.setup=async(req,res)=>{
    const exists = await UserLogin.exists({ username: "admin" });
	if (exists) {
        res.redirect('/login');
		return;
	};

	bcrypt.genSalt(10, function (err, salt) {
		if (err) return next(err);
		bcrypt.hash("pass", salt, function (err, hash) {
			if (err) return next(err);
			
			const newAdmin = new UserLogin({
				username: "admin",
				password: hash
			});
			newAdmin.save();
			res.redirect('/login');
		});
	});
}
//axios.get('https://crud-delivery.herokuapp.com/api/users', { params : { id : req.query.id }})
//axios.get("https://localhost:3000/api/users")
//axios.get("https://crud-delivery.herokuapp.com/api/users")
*/

