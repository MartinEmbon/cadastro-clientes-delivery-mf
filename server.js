const express = require("express")
const dotenv= require("dotenv")
const app = express()
const morgan=require("morgan")
const path = require("path")
const connectDB = require("./server/database/connection")
var UserLogin = require("./server/model/user")

/**For Login Session */
const session = require("express-session")
const passport = require("passport")
const localStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")


dotenv.config({path:"config.env"})
const PORT = process.env.PORT || 8080

//log request
app.use(morgan("tiny"))

//mongodb connection
connectDB()
//parse erquieres to body-parser
app.use(express.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views"))

//load asset
app.use("/css",express.static(path.resolve(__dirname,"assets/css")))
app.use("/img",express.static(path.resolve(__dirname,"assets/img")))
app.use("/js",express.static(path.resolve(__dirname,"assets/js")))

app.use(session({
    secret:"verygoodsecret",
    resave:false,
    saveUninitialized:true
}))

app.use(express.json())

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

passport.use(new localStrategy(function(username,password,done){
    UserLogin.findOne({username:username},function(err,user){
        if(err){
            return done(err)
        } if (!user){
            return done(null,false,{message:"Usario incorreto"})
        }
        bcrypt.compare(password,user.password,function(err,res){
            if(err) return done(err)
            if(res===false){
                return done(null,false,{message:"Senha incorreta"})
            }
            return done(null,user)
        })        
    })
}))

app.use("/",require("./server/routes/router"))

app.listen(PORT,()=>{console.log("server running on",PORT)})