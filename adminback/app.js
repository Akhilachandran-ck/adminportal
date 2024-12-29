const express=require("express"); // express is imorting
const dotenv=require("dotenv");
require("dotenv").config();

const cors=require("cors")
const app=express(); 
require('./db/dbConnection'); 

const feedbackRoute=require('./route/feedbackroute');

app.use(cors());
app.use('/feedback',feedbackRoute);



app.listen(3000, ()=>{
    console.log(`listening to  port ${process.env.port}`);//port is initializing

})