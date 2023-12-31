const axios=require('axios');
const { response } = require('express');


exports.homeRoutes=(req,res)=>{
    axios.get('http://localhost:3000/api/users')
      .then((response)=>{
        console.log(response.data);
        res.render('index',{users: response.data});
      })
      .catch(err=>{
        res.send(err);
      })
    
}

exports.add_user=(req,res)=>{
    res.render('add_user');
}

exports.update_user=(req,res)=>{
    axios.get('http://localhost:3000/api/users',{params :{id:req.query.id}})
    .then((userdata)=>{
        res.render('update_user',{user :userdata.data});
    })
    .catch(err=>{
        res.send(err);
    })
}