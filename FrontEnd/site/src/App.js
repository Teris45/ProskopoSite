import './App.css';
import AppBar from '@mui/material/AppBar';
import { Button, Toolbar, Dialog } from '@mui/material';
import { useState } from 'react';

const App = () =>{

  const [open,setOpen] = useState(false);


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
        
        <AppBar backgroundColor='#751475' position='static'>
          <Toolbar sx={{
            direction:'rtl',
            backgroundColor:'#751475',
          }}>
          <Button onClick={handleClickOpen} sx={{
            }}
            color='inherit'>Login</Button>
          </Toolbar>

        </AppBar>
      </div>
      
    </div>
  )

}

export default App;
