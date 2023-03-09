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

    </div>
  )
}

export default HomeLogo