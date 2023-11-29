require('dotenv').config();
const mongoose=require('mongoose');
const mongoString = process.env.URL;
mongoose.connect(mongoString);

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
module.exports=database;