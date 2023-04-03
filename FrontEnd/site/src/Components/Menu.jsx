import { Button } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const Menu = (props) => {

    const [open, setOpen] = useState(false);


    const openTmimata = () => {
        open ? setOpen(false) : setOpen(true) 
    }
    const handleClose = () =>{
        props.setOpenMenu(false);
    }
    return (
        <div className='menu-container'>
            <div className='button-container'>
                <Button onClick={handleClose} sx={{color:"antiquewhite", height:'50%'}}>
                    <CloseIcon/>
                </Button>
            </div>
            <div className='rest-menu-container'>
                <Button onClick={openTmimata} sx={{zIndex:'1', typography:'h5', color:'antiquewhite', textTransform:'none', '&:hover' : {backgroundColor:'inherit',} }}> 
                    Τμήματα
                </Button>
                {open &&
                <div className='tmimata-container'>
                <Button sx={{typography:'body1', color:'antiquewhite', textTransform:'none', '&:hover' : {backgroundColor:'inherit',} }}> 
                    Λυκόπουλα 7-11
                </Button>
                <Button sx={{typography:'body1', color:'antiquewhite', textTransform:'none', '&:hover' : {backgroundColor:'inherit',} }}> 
                    Πρόσκοποι 11-15
                </Button>
                <Button sx={{typography:'body1', color:'antiquewhite', textTransform:'none', '&:hover' : {backgroundColor:'inherit',} }}> 
                    Ανιχνευτές 15-18
                </Button>
                <Button sx={{typography:'body1', color:'antiquewhite', textTransform:'none', '&:hover' : {backgroundColor:'inherit',} }}> 
                    Δίκτυο 18-26
                </Button>
                <Button sx={{typography:'body1', color:'antiquewhite', textTransform:'none', '&:hover' : {backgroundColor:'inherit',} }}> 
                    Βαθμοφόροι 18+
                </Button>
                <Button sx={{typography:'body1', color:'antiquewhite', textTransform:'none', '&:hover' : {backgroundColor:'inherit',} }}> 
                    Γονείς & Φίλοι 
                </Button>
                </div>
                }
                <Button sx={{zIndex:'0', typography:'h5', color:'antiquewhite', textTransform:'none', '&:hover' : {backgroundColor:'inherit',} }}> 
                Σχετικά 
                </Button>
                <Button sx={{typography:'h5', color:'antiquewhite', textTransform:'none', '&:hover' : {backgroundColor:'inherit',} }}> Χρήσιμα </Button>
                <Button sx={{typography:'h5', color:'antiquewhite', textTransform:'none', '&:hover' : {backgroundColor:'inherit',} }}> Επικοινωνία </Button>
                <Button sx={{typography:'h5', color:'antiquewhite', textTransform:'none', '&:hover' : {backgroundColor:'inherit',} }}> Σύνδεση </Button>
                
            </div>

        
        </div>
  )
}

export default Menu