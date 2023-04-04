import React from 'react'
import './HomeLogo.css';
import { Typography } from '@mui/material';
const HomeStuff = () => {
  return (
    <div className='intro-container'>
        <div className='intro-text'>
            <Typography variant='h2' 
            align='center'
            sx={{ fontWeight:'3rem', fontSize: {sm: '3rem', xs:'2rem'} }}
            fontFamily='Noto Serif'>Ώρες Λειτουργίας Λέσχης
            </Typography>
            <Typography variant='body1' color='inherit' align='center'
            sx={{ fontWeight: '2rem', fontSize: {sm:'1.6rem', xs:'1rem'}}}  fontFamily='Noto Serif'>
            Σάββατο 11:30-13:00 & 17:30 - 19:30
            </Typography>
        </div>
    </div>
  )
}

export default HomeStuff