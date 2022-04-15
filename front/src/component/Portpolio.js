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
              Portpolio#1
              {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
            </SwiperSlide>
            <SwiperSlide>
            Portpolio#2
              {/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
            </SwiperSlide>
            <SwiperSlide>
            Portpolio#3
              {/* <img src="https://swiperjs.com/demos/images/nature-3.jpg" /> */}
            </SwiperSlide>

          </Swiper>
        </div>
        <div id="swipertext">
          <Swiper
            style={{
              
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={0}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <div >
                <img src="img/project1.jpg" />
              </div>
              <div>
                <ul>
                  <li>
                    Project#1 에 사용 한 언어&기술은 
                    HTML , CSS , JS , REACT , PS , PIGMA  이며
                </li>
                  <li>
                    Project#1을 개발 목적은 사이트 홍보이며..
                    그로 인해서 많은 홍보효과를 기대할수 있습니다.~
                </li>
                  <li>
                  제작 특징으로는 내용들을 그누보드를 통해서
                  cms 페이지에서 누구나 간편하게 관리및 수정이 용이하고...
                  </li>
                  <li>
                    프로젝트 마무리후 느낀 아쉬운점과 보완할점은 
                    컨텐츠 내용의 모자름과,디자인등이 어울리지 않았던..
                    mysql 의 연동이 되지 않았고.. 일관성이 없던..
                  </li>
                  <li></li>
                </ul>
              </div>
              
            </SwiperSlide>
            <SwiperSlide>
              <img src="img/m1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="img/m2.jpg" />
            </SwiperSlide>

          </Swiper>
          <ul className ="swipertextbox">

          </ul>
        </div>
    </div>
  </>
   
  )
}


