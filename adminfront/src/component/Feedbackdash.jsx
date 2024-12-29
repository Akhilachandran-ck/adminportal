
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom';

const Feedbackdash = () => {
  const navigate=useNavigate();



  const [data,setData]=useState([])
  useEffect(()=>{
axios
.get('http://localhost:3000/feedback/feedback/get',data)


  
.then((res)=>{
    
  console.log(res.data)
  setData(res.data);

})
.catch((err)=>{

  console.log(err)
});

},[])
const click1=(id)=>{
   
       
  axios.delete(`http://localhost:3000/feedback/feedback/del/${id}`)

   .then(()=>{
    window.location.reload();
     navigate('/feedbackdash');

     console.log(res);
   })
   .catch((error)=>{
     console.log(error)
   })}

    
  function update_data(val){
 
      navigate('/addfeedback',{state:{val}})
       }

       

        <Button  variant='contained' style={{marginRight:'50px',marginLeft:'1px'}} onClick={()=>click1(row._id)}>Add</Button>


  return (
  <div>

<TableContainer id="t1">
    <Table>
      <TableHead>
        <TableRow>
          
          

      <Typography variant='h6' alignContent={'center'}>Feedback Details  </Typography> 
      
      
   
      </TableRow>
        <TableRow>
        <TableCell align="left">Course-Id</TableCell>

          <TableCell align="left">Course-Name</TableCell>
          <TableCell align="left">Duration</TableCell>
          <TableCell align="left">Rating</TableCell>
          <TableCell align="left">Comments</TableCell>


        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow
          
            key={row.cid}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
                       <TableCell align="left">{row.cid}</TableCell>

            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="left" >{row.duration}</TableCell>
            <TableCell align="left">{row.rating}</TableCell>
            <TableCell align="left">{row.comments}</TableCell>

            <Button variant='contained' style={{marginLeft:'30px'}} onClick={()=>{
            update_data(row)
            }}>Update </Button>
            <Button  variant='contained' style={{marginLeft:'30px'}} onClick={()=>click1(row._id)}>Delete</Button>

          </TableRow>
        ))}
      </TableBody>
      
    </Table>

 


  </TableContainer>



<br></br>

<br></br>





  </div>
)

 
}
export default Feedbackdash