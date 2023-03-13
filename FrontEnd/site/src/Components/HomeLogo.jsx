import { Button } from '@mui/material';
import React from 'react';
import logo from '../images/logo.png';
import './HomeLogo.css';


const HomeLogo = () => {
  return (
    <div className='container'>

        <img src={logo} alt='logo' className='image-box'></img>
        <div className='logo-title'>
            <h1 className='logo-text'>3ο Σύστημα Προσκόπων Τούφας Χαλανδρίου</h1>
        </div>

        <Button sx={{
          backgroundColor: "#751475",
          height: "125px",
          width: "125px",
          borderRadius: "75px",
          textTransform: "none",
          color:"antiquewhite",
          fontSize:"20px",
          '&:hover': {backgroundColor: "#751475"}
        }}> Ξεκίνα </Button>

    </div>
  )
}

export default HomeLogo