const express = require("express")
const dotenv= require("dotenv")
const app = express()
const morgan=require("morgan")
const bodyparser=require("body-parser")
const path = require("path")
const connectDB = require("./server/database/connection")

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

//load routers

//app.use("/",require("./server/routes/router"))
app.use("/",require("./server/routes/router"))

app.listen(PORT,()=>{console.log("server running on",PORT)})