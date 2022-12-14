import React from 'react';

import SliderCardComponent from "./slider-card.component";

import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from "swiper";

import '../stylesheets/slider.css';
// Import Swiper styles
import "swiper/css";
import  'swiper/css/free-mode';
import "swiper/css/pagination";
import "swiper/css/navigation";


import img1 from '../img/product1.jpeg';
import  img2 from  '../img/product2.jpeg';
import  img3 from  '../img/product1.jpeg';

function SliderComponent() {
    return (
        <div className="slider container py-5 px-4 justify-content-center">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <SliderCardComponent data={{imgSrc: img1, price: '$10', title: 'Title 1'}} />
                </SwiperSlide>

                <SwiperSlide>
                    <SliderCardComponent data={{imgSrc: img2, price: '$11', title: 'Title 2'}} />
                </SwiperSlide>

                <SwiperSlide>
                    <SliderCardComponent data={{imgSrc: img3, price: '$12', title: 'Title 3'}} />
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default SliderComponent;