const db = require('../model/model');

//CREATE
const create = (req,res)=>{
    if(!req.body){
        res.status(400).send({ message : "Content can not be empty!"});
        return;
    }

    const user = new db({
        name : req.body.name,
        email : req.body.email,
        gender: req.body.gender,
        dpt:req.body.dpt,
        hiredate:req.body.hiredate,
        status : req.body.status
    })

    user.save()
        .then(data => {
            res.redirect('/add-user');
        })
        .catch(err =>{
            res.status(500).send({message : err.message});
        });

}

//GET
const find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        db.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "User not found "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: err.message})
            })

    }else{
        db.find()
            .then(user => { res.send(user) })
            .catch(err => {
                res.status(500).send({ message : err.message  })
            })
    }

    
}

// UPDATE
const update = (req, res)=>{
    if(!req.body){
        return res.status(400).send({ message : "Data to be updated can not be empty"});
    }

    const id = req.params.id;
    db.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}`});
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error in Updating user information"});
        })
}

// DELETE
const deletion = (req, res)=>{
    const id = req.params.id;

    db.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}`});
            }else{
                res.send({ message : "User was deleted successfully!"});
            }
        })
        .catch(err =>{
            res.status(500).send({ message: "Could not delete User with id=" + id });
        });
}

module.exports={create,find,update,deletion};