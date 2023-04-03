import { Button, Typography } from '@mui/material';
import React from 'react';
import logo from '../images/logo.png';
import './HomeLogo.css';


const HomeLogo = () => {
  return (
    <div className='container'>

        <img src={logo} alt='logo' className='image-box'></img>
        <div className='logo-title'>
            <Typography variant='h2' color='antiquewhite' align='center' sx={{ fontSize: {sm: '4rem', xs:'3rem'} }} fontFamily='Noto Serif'>3ο Σύστημα Προσκόπων <br></br>Τούφας Χαλανδρίου</Typography>
        </div>
        <div className='horizontal-line-container'>
          <hr className='horizontal-line'></hr>
          <hr className='horizontal-line'></hr>
        </div>
        <div className='soma'>
          <Typography variant='body' color='antiquewhite' align='center' sx={{ fontSize: {sm: '1.5rem', xs:'1rem'} }} fontFamily='Noto Serif'>Σώμα Ελλήνων Προσκόπων</Typography>
        </div>
        <Button sx={{
          backgroundColor: "#751475",
          height: {sm: "125px", xs:'100px'},
          width: {sm: "125px", xs:'100px'},
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