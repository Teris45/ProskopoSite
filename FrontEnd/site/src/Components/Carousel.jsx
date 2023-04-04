import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import Cubs from '../images/cubs.png';
import Scouts from '../images/scouts.png';
import Explorers from '../images/explorers.png';
import Network from '../images/network.png';
import Leaders from '../images/leaders.png';
import Parents from '../images/parents.png';
import 'swiper/css';
import './HomeLogo.css';
import CarouselCard from './CarouselCard';

const Carousel = () => {
  return (
    <div className='intro-container'>
        <Swiper style={{padding:'2rem'}}
            breakpoints={{
              320:{
                slidesPerView:1,
                spaceBetween:20,

              },

              660:{
                slidesPerView:2,
                spaceBetween:50,
              },
              
              1000:{
                slidesPerView:3,
                spaceBetween:40,
              },
              
              1300:{
                slidesPerView:5,
                spaceBetween:30,
              }    
              
            }}
          >
            <SwiperSlide>
                <CarouselCard image={Cubs} tmima='Αγέλη Λυκοπούλων'
                taksi='Β&apos;- Ε&apos; Δημοτικού'/>
            </SwiperSlide>
            
            <SwiperSlide>
                <CarouselCard image={Scouts} tmima='Ομάδα Προσκόπων'
                taksi='ΣΤ&apos; Δημοτικού - Γ&apos; Γυμνασίου'/>
            </SwiperSlide>


            <SwiperSlide>
                <CarouselCard image={Explorers} tmima='Κοινότητα Ανιχνευτών'
                taksi='Α&apos; - Γ&apos; Λυκείου'/>
            </SwiperSlide>

            <SwiperSlide>
                <CarouselCard image={Network} tmima='Προσκοπικό Δίκτυο'
                taksi='Ενήλικες εως 26'/>
            </SwiperSlide>
        

            <SwiperSlide>
                <CarouselCard image={Leaders} tmima='Ενήλικα Στελέχη'
                taksi='Ενήλικες'/>
            </SwiperSlide>


            <SwiperSlide>
                <CarouselCard image={Parents} tmima='Επιτροπή Κ.Σ.'
                taksi='Γονείς & Φίλοι'/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Carousel