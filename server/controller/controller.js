var Userdb = require("../model/model")


// create and save new user
exports.create = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Conent can not be empty!"})
        return
    }
    //new user
    const user = new Userdb({
        name:req.body.name,
        endereco:req.body.endereco,
        telefone:req.body.telefone,
        taxa:req.body.taxa,
        obs:req.body.obs,
        status: req.body.status
    })
    //save user in the database
    user
        .save(user)
        .then(data=>{
            res.redirect("/")
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "Some error occured while creating a create operation"})
        })
}

//retrive and return all users/retrieve and return a single user

exports.find = async(req,res)=>{
    if(req.query.id){
        const id = req.query.id
        await Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({
                    message:"Not found id"
                })
            }
            else {
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"error retrieving"})
        })
    } else {
        Userdb.find().sort({name:1})    
        .then(user => {
            res.send(user)
            
        })
       
        .catch(err => {
            res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
        })
    }
}

//update a new identified user by user id

exports.update = async(req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    await Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{                
                res.send(data)                
                
            }
        })
        
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}


//Delete a user with specified user id
exports.delete=async(req,res)=>{
    const id = req.params.id
    await Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Cannot delete with id"})
        }
        else {
            res.send({
                message:"User deleted sucesfully"
            })
        }
       
    })
    .catch(err=>{
        res.status(500).send({
            message:"Could not delete User width id"+id
        })
    })
}
