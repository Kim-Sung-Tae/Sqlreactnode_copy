import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';


// import 'swiper/swiper.scss';
import 'swiper/css'  // 핵심 Swiper 스타일
import 'swiper/css/bundle' //  모든 모듈 스타일 
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";





export default function Portpolio() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  return (
  
  <>
     <div id ="swiperwrap">
        <div id="swiperbox">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
          
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>

          </Swiper>
        </div>
        <div id="swipertext">
          <Swiper
            style={{
              
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>

          </Swiper>
          <ul class ="swipertextbox">
          <li>1모달안에 들어갈 내용 </li>
          <li>2</li>
          <li>3</li>
          <li>4</li> 
          </ul>
        </div>
    </div>
  </>
   
  )
}


