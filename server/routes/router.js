const express = require('express');
const route = express.Router()
const services = require("../services/render")
const controller = require("../controller/controller")

const passport = require("passport")

const isLoggedIn = require("./../middleware/isLoggedIn")
const isLoggedOut = require("./../middleware/isLoggedOut")

route.get("/",isLoggedIn,services.homeRoutes)
//route.get("/",isLoggedIn,services.index)
route.get("/login",isLoggedOut,services.login)

route.get("/logout",services.logout)

route.post("/login",passport.authenticate("local",{
    succesRedirect:"/",
    failureRedirect:"/login?error=true"
}),services.loginpost)

//route.get("/setup",services.setup)






route.get("/add_user",services.add_user)

route.get("/update_user",services.update_user)



//API

route.post("/api/users",controller.create)
route.get("/api/users",controller.find)
route.put('/api/users/:id', controller.update);
route.delete("/api/users/:id",controller.delete)

route.use("*",services.pageNotFound)

module.exports = route

/*

app.use(passport.initialize())
//save session and not log out
app.use(passport.session())
//when login we ser and deserialize user. 
passport.serializeUser(function(user,done){
    done(null,user.id)
})

passport.deserializeUser(function(id,done){
    UserLogin.findById(id,function(err,user){
        done(err,user)
    })
})

passport.serializeUser(function(user,done){
    done(null,user.id)
})

passport.deserializeUser(function(id,done){
    UserLogin.findById(id,function(err,user){
        done(err,user)
    })
})

passport.use(new localStrategy(function(username,password,done){
    UserLogin.findOne({username:username},function(err,user){
        if(err){
            return done(err)
        } if (!user){
            return done(null,false,{message:"Incorrect username"})
        }
        bcrypt.compare(password,user.password,function(err,res){
            if(err) return done(err)
            if(res===false){
                return done(null,false,{message:"Incorrect password"})
            }
            return done(null,user)
        })
        
    })
}))

//const localStrategy = require("passport-local").Strategy
//const app = express()
//var UserLogin = require("../model/user")
//const bcrypt = require("bcrypt")
//const server=require("./../../server")
*/