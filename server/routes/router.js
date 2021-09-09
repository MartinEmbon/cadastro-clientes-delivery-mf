const express = require('express');
const route = express.Router()
const services = require("../services/render")
const controller = require("../controller/controller")

route.get("/",services.index)

route.get("/dashboard",services.homeRoutes)

route.get("/dashboard/add_user",services.add_user)

route.get("/dashboard/update_user",services.update_user)

//API

route.post("/dashboard/api/users",controller.create)
route.get("/dashboard/api/users",controller.find)
//route.get("/api/users/:id",controller.findOne)
route.put('/dashboard/api/users/:id', controller.update);
route.delete("/dashboard/api/users/:id",controller.delete)

module.exports = route