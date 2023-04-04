import './App.css';
import HomeBar from './Components/HomeBar';
import HomeLogo from './Components/HomeLogo';
import HomeIntro from './Components/HomeIntro';
import HomeStuff from './Components/HomeStuff';
import Carousel from './Components/Carousel';
import { useState } from 'react';
import Menu from './Components/Menu'
import { Dialog } from '@mui/material';
const App = () =>{

  const [openMenu,setOpenMenu] = useState(false);
  

  return(
    <div className='my-container'>


      <HomeBar openMenu={openMenu} setOpenMenu={setOpenMenu}/>

      <Dialog  open={openMenu} fullScreen>
        <Menu setOpenMenu={setOpenMenu}/>
      </Dialog>
      
      <HomeLogo/>
      <HomeIntro/>
      <HomeStuff/>
      <Carousel/>
    </div>


)

}

export default App;
