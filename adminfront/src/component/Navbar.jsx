import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
<div style={{marginTop:'1px'}} >





<Box   sx={{ flexGrow: 1 }}  style={{width:'1300px'}}>
  
      <AppBar  >
        <Toolbar>
        
          <Typography id="f1" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FeedbackApp
          </Typography>



         <Link to={'/addfeedback'} style={{color:'white'}}> <Button color="inherit" 



         >AddFeedback</Button></Link>


         
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar