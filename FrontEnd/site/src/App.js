import './App.css';
import HomeBar from './Components/HomeBar';
import HomeLogo from './Components/HomeLogo';
import HomeIntro from './Components/HomeIntro';
import { useState } from 'react';
import Menu from './Components/Menu'
import { Dialog } from '@mui/material';
const App = () =>{

  const [openMenu,setOpenMenu] = useState(false);
  

  return(
    <div className='my-container'>


      <HomeBar openMenu={openMenu} setOpenMenu={setOpenMenu}></HomeBar>

      <Dialog  open={openMenu} fullScreen>
        <Menu setOpenMenu={setOpenMenu}/>
      </Dialog>
      
      <HomeLogo></HomeLogo>
      <HomeIntro></HomeIntro>
    </div>


)

}

export default App;
