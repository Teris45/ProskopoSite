import { Typography } from '@mui/material';
import React from 'react'
import './HomeLogo.css';
import lesxi from '../images/lesxi.jpg';

const HomeIntro = () => {
  return (
    <div className='intro-container'>
      <img src={lesxi} alt='lesxi' className='image-lesxi'></img>
      <div className='intro-text'>
        <Typography  variant='h2' color='inherit' align='center' sx={{ fontWeight:'3rem', fontSize: {sm: '3rem', xs:'2rem'} }} fontFamily='Noto Serif'>
        Mια κίνηση για την Νεολαία!</Typography>
        <Typography variant='body1' color='inherit' align='left'  fontFamily='Noto Serif'>
        Ο Προσκοπισμός είναι μια εθελοντική, πολιτική, μη κομματική, παιδαγωγική κίνηση για νέους ανθρώπους, ανοικτή σε όλους χωρίς διακρίσεις. </Typography>
        <Typography variant='body1' color='inherit' align='left'  fontFamily='Noto Serif'>
        Αποστολή του Προσκοπισμού είναι να συμβάλλει στη διαπαιδαγώγηση των νέων μέσω ενός
        συστήματος Αξιών και να βοηθήσει στην οικοδόμηση ενός καλύτερου κόσμου,
        όπου οι άνθρωποι ολοκληρώνονται ως άτομα και διαδραματίζουν έναν εποικοδομητικό ρόλο στην κοινωνία.
        </Typography>
      </div>
    </div>
  )
}

export default HomeIntro