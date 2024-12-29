const express=require("express");
const router=express.Router();
const adminModel=require("../model/feedbackmodel.js");
router.use(express.json());

router.post("/addfeedback/add",async(req,res)=>{
  try {
      var item=req.body;
var data=new adminModel(item);
await data.save();
res.status(200).send("data added successfully")
  } catch (error) { 
      res.status(404).send("unable to send  data")
 
  }
});
router.get("/feedback/get",async(req,res)=>{
  try {
      var data=await adminModel.find();
      res.status(200).send(data);
      
  } catch (error) {
      res.status(404).send("unable to getdata");
  
  }

  router.delete("/feedback/del/:id",async(req,res)=>{




    try {
        await adminModel.findByIdAndDelete(req.params.id);
        res.status(200).send("deleted successfully");
        
    } catch (error) {
        res.status(404).send("unable to delete data");

    }
   
})
}
)

router.put("/feedback/edit/:id",async(req,res)=>{




  try {
      await adminModel.findByIdAndUpdate(req.params.id,req.body);
      res.status(200).send("edited successfully");
      
  } catch (error) {
      res.status(404).send("unable to edit data");

  }
 
})




         
     












    



 
  
 
  
  
  
  
  
  
  

  
  
    

  
  

  
  







  










  
  
  module.exports=router;
  
  
  
  
  
  
      
  
  







