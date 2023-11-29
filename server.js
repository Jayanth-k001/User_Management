const express = require('express');
const morgan= require('morgan');
const bodyparser = require('body-parser');
const path= require("path");
const db= require('./server/Config/dbconnection');
const port=process.env.PORT || 8000;


const app=express();

require('dotenv').config();

app.use(morgan('tiny'));

app.use(bodyparser.urlencoded({extended :true}));

app.set('view engine',"ejs");
// app.set("views",path.resolve(__dirname,"views/ejs"));

app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

const route=require('./server/routes/routes');

app.use('/',route);


app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})

