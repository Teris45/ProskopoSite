import './App.css';
import AppBar from '@mui/material/AppBar';
import { Button, Toolbar, Dialog } from '@mui/material';
import { useState } from 'react';
import logo from './images/logo.png';

const App = () =>{

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


  const handleClickOpen = () =>
  {
    setOpen(true);
  }

  const handleClose = () =>
  {
    setOpen(false);
  }

  return(
    <div className='body'>
      <div className='App-container'>
        
        
        <Dialog open={open} onClose={handleClose}>
          <div className='login-container'></div>
        </Dialog>

        
        <AppBar position='static'>
          <Toolbar sx={{
            gap: '10px',
            alignItems : 'center',
            justifyContent: 'space-between',
            backgroundColor:'#751475',
          }}>
            <Button sx={{color:'inherit', textTransform:'none', width:'fit-content', gap:'10px', justifyContent:'center', alignItems:'center',
              '&:hover' : {backgroundColor:'inherit',}
              }} >
              <img src={logo} className='logo-image' alt="logo"></img>
              <p className='logo-p'>3ο Σύστημα Προσκόπων Τούφας Χαλανδρίου</p>
            </Button>
            <div className='other-content'>
              <div onMouseEnter={handleHover} onMouseLeave={handleMissingPointer} className='hovering-button'>
              <Button  sx={{color:'inherit', textTransform:'none', '&:hover' : {backgroundColor:'inherit',} }}
                > Τμήματα 
              </Button>
              {openHover  && <div onMouseEnter={handleHover} className='dropdown-container'>
                  <div className = 'first-item' > Λυκόπουλα 7-11 </div>
                  <div className = 'first-item' > Πρόσκοποι 11-15 </div>
                  <div className = 'first-item' > Ανιχνευτές 15-18 </div>
                  <div className = 'first-item' > Δίκτυο 18-26 </div>
                  <div className = 'first-item' > Βαθμοφόροι 18+ </div>
                  <div className = 'first-item' > Γονείς & Φίλοι</div>

                </div>}
              </div>

              <Button sx={{color:'inherit', textTransform:'none', '&:hover' : {backgroundColor:'inherit',} }}> Σχετικά </Button>
              <Button sx={{color:'inherit', textTransform:'none', '&:hover' : {backgroundColor:'inherit',} }}> Χρήσιμα </Button>
              <Button sx={{color:'inherit', textTransform:'none', '&:hover' : {backgroundColor:'inherit',} }}> Επικοινωνία </Button>
            </div>
            <Button onClick={handleClickOpen} sx={{
              color: 'inherit', 
              '&:hover' : {backgroundColor:'inherit',}}}
            >Login</Button>
          </Toolbar>

        </AppBar>
      </div>

      

      
    </div>


)

}

export default App;
