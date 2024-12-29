const mongoose=require("mongoose");
const feedbackSchema=mongoose.Schema(
{
    cid:Number,
    name:String,
 duration:String,
 rating:Number,
 comments:String
},



);


const adminModel = mongoose.model('admindatas',feedbackSchema);
module.exports=adminModel;