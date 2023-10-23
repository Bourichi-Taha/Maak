import { Swiper as Swip, SwiperSlide } from 'swiper/react';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BrushIcon from '@mui/icons-material/Brush';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import "../assets/css/swiper.css"
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const Swiper = () => {
  return (
    <>
      <Swip
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-item-container">
            <DesignServicesIcon className='sic-icon'/>
            <h1 className="sic-title">
                UI/UX Design
            </h1>
            <p className="sic-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita id perferendis? Tenetur, delectus voluptatibus.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-item-container">
            <DesignServicesIcon className='sic-icon'/>
            <h1 className="sic-title">
                UI/UX Design
            </h1>
            <p className="sic-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita id perferendis? Tenetur, delectus voluptatibus.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-item-container">
            <DesignServicesIcon className='sic-icon'/>
            <h1 className="sic-title">
                UI/UX Design
            </h1>
            <p className="sic-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita id perferendis? Tenetur, delectus voluptatibus.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-item-container">
            <DesignServicesIcon className='sic-icon'/>
            <h1 className="sic-title">
                UI/UX Design
            </h1>
            <p className="sic-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita id perferendis? Tenetur, delectus voluptatibus.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-item-container">
            <DesignServicesIcon className='sic-icon'/>
            <h1 className="sic-title">
                UI/UX Design
            </h1>
            <p className="sic-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita id perferendis? Tenetur, delectus voluptatibus.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-item-container">
            <DesignServicesIcon className='sic-icon'/>
            <h1 className="sic-title">
                UI/UX Design
            </h1>
            <p className="sic-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita id perferendis? Tenetur, delectus voluptatibus.
            </p>
          </div>
        </SwiperSlide>
        
      </Swip>
    </>
  )
}

export default Swiper