import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Button, Toolbar, Dialog, Box } from '@mui/material';
import { useState } from 'react';
import logo from '../images/logo.png';
import ButtonList from './ButtonList';
import MenuIcon from '@mui/icons-material/Menu';


const HomeBar = ( props ) => {
    const [open,setOpen] = useState(false);
    const [openHover, setOpenHover] = useState(false);
    


    const handleHover = () =>
    {
        setOpenHover(true);
    }

    const handleMissingPointer = () =>
    {
        setOpenHover(false);
    }

    const handleOpenMenu = () =>
    {
      props.setOpenMenu(true);
    }

    // const handleClickOpen = () =>
    // {
    //     setOpen(true);
    // }

    const handleClose = () =>
    {
        setOpen(false);
    }
  return (
    <div className='App-container'>
        
        
        <Dialog open={open} onClose={handleClose}>
          <div className='login-container'></div>
        </Dialog>


            
        <AppBar sx={{backgroundColor:'#751475', zIndex:0,}} position="static">
          <Toolbar sx={{
            display:"flex",
            justifyContent:"space-around"

          }}>

              <Button sx={{color:'inherit', textTransform:'none', width:'fit-content', gap:'10px', justifyContent:'center', alignItems:'center',
                '&:hover' : {backgroundColor:'inherit',}
                }} >
                <img src={logo} className='logo-image' alt="logo"></img>
                <p className='logo-p'>3ο Σύστημα Προσκόπων Τούφας Χαλανδρίου</p>
              </Button>
              <Box sx={{ display: { xs: "none", sm: "flex" }, mx:"auto", justifyContent:"space-around", width:"500px"}}>
                <div onMouseEnter={handleHover} onMouseLeave={handleMissingPointer} className='hovering-button'>
                <Button  sx={{color:'inherit', textTransform:'none', '&:hover' : {backgroundColor:'inherit',} }}
                  > Τμήματα 
                </Button>
                
                {openHover  && <div onMouseEnter={handleHover} className='dropdown-container'>
                    <ButtonList text="Λυκόπουλα 7-11"></ButtonList> 
                    <ButtonList text = "Πρόσκοποι 11-15"></ButtonList>
                    <ButtonList text = "Ανιχνευτές 15-18"></ButtonList>
                    <ButtonList text = "Δίκτυο 18-26"></ButtonList>
                    <ButtonList text = "Βαθμοφόροι 18+"></ButtonList>
                    <ButtonList text = "Γονείς & Φίλοι"></ButtonList>
                  </div>}

                </div>

              <Button sx={{color:'inherit', textTransform:'none', '&:hover' : {backgroundColor:'inherit',} }}> Σχετικά </Button>
              <Button sx={{color:'inherit', textTransform:'none', '&:hover' : {backgroundColor:'inherit',} }}> Χρήσιμα </Button>
              <Button sx={{color:'inherit', textTransform:'none', '&:hover' : {backgroundColor:'inherit',} }}> Επικοινωνία </Button>
            </Box>

            <Box sx={{display:{xs : "none", sm:"flex"}}}>
              <Button sx={{color:'inherit', textTransform:'none', '&:hover' : {backgroundColor:'inherit',} }}> Σύνδεση </Button>
            </Box>
                
            <Box sx={{display:{xs : "flex", sm:"none"}}}>
                <Button sx={{color:'antiquewhite'}} onClick={handleOpenMenu}>
                  <MenuIcon/>
                </Button>
            </Box>
  
          </Toolbar>
        </AppBar>
      </div>

  )
}

export default HomeBar