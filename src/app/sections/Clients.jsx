'use client'
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import diet from '../../../public/images/FONDO04.jpg';
import cardGen from '../../../public/images/CARD01.png';
import cardVeggie from '../../../public/images/CARD02.png';
import cardFlex from '../../../public/images/CARD03.png';
import cardFreeg from '../../../public/images/CARD04.png';

import IconCard1 from '../../../public/images/ICONO.CARD01.png';
import IconCard2 from '../../../public/images/ICONO.CARD02.png';
import IconCard3 from '../../../public/images/ICONO.CARD03.png';
import IconCard4 from '../../../public/images/ICONO.CARD04.png';


import ThreeDCardDemo from '../components/ThreeDCardDemo.jsx';
import { Button } from '@nextui-org/react';
import Column from '../components/Column';


import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import CardClient from '../components/CardClient.jsx';

const Clients = () => {

  const controls = useAnimation();
    const { ref, inView } = useInView();
  
    React.useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1 });
      }
    }, [controls, inView]);
 



  return (
    <section id='clients' className='snap-start h-[100vh] min-h-svh relative z-0 flex flex-col justify-end '>
      {/* <Column /> */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 1, ease: "easeIn" }}
         className='gap-10 container  flex flex-col  lg:flex-row-reverse justify-start lg:justify-start lg:items-start'>
        
        <div className=' flex flex-col   w-full lg:w-[40%]  lg:items-end lg:justify-end lg:text-end '>
          <h2 className='titulo pb-3  lg:pb-2 text-center border-white lg:border-none lg:text-start '>
            CLIENTES
          </h2>
          <span className='mt-4 subtitulo inline-flex pt-3 lg:p-0 mx-auto lg:mx-0 lg:pr-4 border-t-4 lg:border-t-0 lg:border-r-5 text-sm text-center lg:text-xl lg:text-start '>
            PERSONAS EN LAS QUE CONFIO
          </span>
        </div>

        <div className='z-99 h-full w-full lg:w-[60%]'>

          <Swiper
        navigation={true} modules={[Navigation
          // ,Pagination
        ]}
        slidesPerView={1}
        spaceBetween={50}
        // pagination={{
        //   clickable: true,
        //   color:"red"
        // }}
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
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}

        className='sm:w-[90%] min-h-[200px] w-full flex items-start justify-start h-full max-h-full  lg:max-h-[80%]    ' >
                  
       
          <SwiperSlide  className=' rounded-xl eachSlide swiper-no-swiping  mb-auto w-full '>
            <CardClient/>


          </SwiperSlide>
          <SwiperSlide  className=' w-full h-[200px] rounded-xl eachSlide swiper-no-swiping '>
            <CardClient/>


          </SwiperSlide>
          <SwiperSlide  className=' w-full h-[200px] rounded-xl eachSlide swiper-no-swiping '>
            <CardClient/>


          </SwiperSlide>
          <SwiperSlide  className=' w-full h-[200px] rounded-xl  eachSlide swiper-no-swiping'>
            <CardClient/>


          </SwiperSlide>
          <SwiperSlide  className=' w-full h-[200px] rounded-xl eachSlide swiper-no-swiping '>
            <CardClient/>


          </SwiperSlide>
          <SwiperSlide  className=' w-full h-[200px] rounded-xl eachSlide swiper-no-swiping '>
            <CardClient/>


          </SwiperSlide>
      </Swiper>
      

        </div>
      </motion.div>

      <Image
        alt='min-h-screen'
        src={diet}
        placeholder='blur'
        fill
        sizes='100vw'
        style={{
          objectFit: 'cover',
          zIndex: -5,
          backgroundAttachment:"fixed",
          backgroundPosition:"center"
          }}
      />
    </section>
  );
};

export default Clients;

