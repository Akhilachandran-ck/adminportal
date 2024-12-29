
import React, { useEffect, useState } from 'react'
import '../App.css'
import { Box, Button, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Addfeedback = () => {
  
    
  const location=useLocation();
  const [form,setForm]=useState({

    
    cid:'',
    name:'',
 duration:'',
 rating:'',
 comments:''
    

  });
useEffect(()=>{
if(location.state!=null){
setForm({...form,cid:location.state.val.cid,
  name:location.state.val.name,

  duration:location.state.val.duration,
  rating:location.state.val.rating,
  comments:location.state.val.comments,
  


})

}
else{

  setForm({...form,
    
    cid:'',
    name:'',
 duration:'',
 rating:'',
 comments:''
  })
}

},[])
  const navigate=useNavigate();

  function click1(){

   console.log(form);
   if(location.state!=null){
    axios.put('http://localhost:3000/feedback/feedback/edit/'+location.state.val._id,form)
    .then((res)=>{

    alert(res.data)

      navigate('/');
  
       console.log(res);
    })
    .catch((error)=>{
      console.log(error)
    })}
  
  else{

   axios.post('http://localhost:3000/feedback/addfeedback/add',form)
   

  .then((res)=>{
   alert(res.data)

   navigate('/');

    console.log(res);
  })
  .catch((error)=>{
    console.log(error)
  })}
  }
  
 
 return (
     <Box
       sx={{flexGrow:1}}style={{marginTop:'10%',marginLeft:'20%',width:'50%'}} >
         <Grid container spacing={2}>

         <Grid size={12}>
           <Typography variant='h4' >Feedback Details</Typography>

           </Grid>


           <Grid size={12}>
          <TextField fullWidth
            
            id="outlined-basic"
            label="Course-Id"
            variant='outlined'
            name='cid'
            value={form.cid}
            onChange={(e)=>{
            setForm({...form,cid:e.target.value})
            }}
          />


</Grid>
         



<Grid size={12}>

<TextField fullWidth
   
   id="outlined-multiline-flexible"
   label="Course Name"
   name='name'
   value={form.name}
   onChange={(e)=>{
     setForm({...form,name:e.target.value})
     }}
   
 />
 </Grid>

         <Grid size={12}>
       

         
       <TextField fullWidth
         
         id="outlined-basic"
         label="Duration"
         variant='outlined'
         name='duration'
         value={form.duration}
         onChange={(e)=>{
           setForm({...form,duration:e.target.value})
           }}
         
       />
       </Grid>


       <Grid size={12}>
       

         
       <TextField fullWidth
         
         id="outlined-basic"
         label="Rating"
         variant='outlined'
         name='rating'
         value={form.rating}
         onChange={(e)=>{
           setForm({...form,rating:e.target.value})
           }}
         
       />
       </Grid> 


        
        
<Grid size={12}>
      
       <TextField fullWidth
          
          id="outlined-multiline-flexible"
          label="Comments"
          name='comments'
          value={form.comments}
          onChange={(e)=>{
            setForm({...form,comments:e.target.value})
            }}
          
        />
        
        </Grid>
        

              
         
       

 
             
        <Grid size={12}>
 
        <center>
        <Button id="bu2" variant="contained" onClick={click1}>Add Feedback</Button></center>
      
 
 

 </Grid>
</Grid>
      </Box>

   
)










}

export default Addfeedback