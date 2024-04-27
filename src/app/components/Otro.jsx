import Column from '../components/Column';

// Import Swiper React components
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';


const Otro = () => {
  return (
    <section className='snap-center h-[100vh] min-h-svh bg-red-500 w-[800px] mx-auto '>

      <style jsx global>{`
        .swiper {
          width:100%
          height: 500px
          padding: 30px


        }

        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;

          /* Center slide text vertically */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

      <Swiper
        navigation={true} modules={[Navigation,Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}

        className="w-full h-[60%] flex justify-center items-center p-6"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

    </section>
  )
}

export default Otro;
