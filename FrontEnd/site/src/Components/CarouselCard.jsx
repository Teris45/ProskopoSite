import React from 'react'
import './HomeLogo.css'
import { Typography } from '@mui/material'

const CarouselCard = (props) => {
  return (
    <div className='my-paper'>
        <img alt='lesxi' className='image-size' src={props.image}></img>
        <div className='paper-text'>
        <Typography variant='body1' 
        align='center'
        sx={{ fontWeight:'400px', fontSize: {sm: '1.7rem', xs:'1.3rem'} }}
        fontFamily='Noto Serif'>
            {props.tmima}
        </Typography>
        <Typography variant='body1' 
        align='center'
        sx={{ fontWeight:'2rem', fontSize: {sm: '1.3rem', xs:'1rem'} }}
        fontFamily='Noto Serif'>
            {props.taksi}
        </Typography>
        </div>
    </div>
  )
}

export default CarouselCard