'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';
import CardDiet from '../CardDiet';

const Diet = () => {

  const controls = useAnimation();
    const { ref, inView } = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1 });
      }
    }, [controls, inView]);
  const cards = [
    {
        title:"DIETA GENERAL",
        icon:'/images/ICONO.CARD01.png',
        background:'/images/CARD01.png',
    },
    {
        title:"DIETA VEGETARIANA",
        icon:'/images/ICONO.CARD02.png',
        background:'/images/CARD02.png',
    },
    {
        title:"DIETA LIBRE DE GLUTEN",
        icon:'/images/ICONO.CARD03.png',
        background:'/images/CARD03.png',
    },
    {
        title:"DIETA FLEXIBLE",
        icon:'/images/ICONO.CARD04.png',
        background:'/images/CARD04.png',
    },
    {
        title:"DIETA sapelokit",
        icon:'/images/ICONO.CARD04.png',
        background:'/images/CARD04.png',
    }
  ]



  return (
    <section id='recetario' className='snap-start h-[100dvh] md:h-[100vh] min-h-svh relative z-0 flex flex-col justify-end'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 1, ease: "easeIn" }}
         className=' gap-10 lg:gap-14 container flex flex-col justify-start mx-auto'>
        <div className=' w-[90%]  mx-auto lg:w-full flex flex-col justify-center items-center'>
            <h2 className='titulo mx-auto inline-block pb-4 lg:pb-1 text-center lg:text-left   lg:m-0 '>
              LA 
              ALIMENTACION
            </h2>

            <p className='subtitulo  px-4 text-center pt-4 max-w-[30rem] border-t-4 lg:border-none border-white  '>
              LOS CIMIENTOS PARA EL CAMBIO FISICO Y TU BIENESTAR
            </p>
        </div>

        {/* <div className=' z-99 h-[70%]  w-full   '> */}
          <Swiper
        navigation={true} modules={[Navigation
          // ,Pagination
        ]}
        slidesPerView={1}
        spaceBetween={10}
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
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
            
          },
        }}

        className='min-h-[12.5rem] h-full max-h-full  w-full sm:w-[90%] lg:w-full  max-w-full rounded-xl lg:!px-16   '
      >
                    

        {cards.map(card =>(
          <SwiperSlide key={card.title} className=' w-full h-full  '>
            <CardDiet  props={card} />
          </SwiperSlide>))}
      </Swiper>
      
        {/* </div> */}
      </motion.div>

      <Image
        alt='min-h-screen'
        src='/images/FONDO03.jpg'
        // placeholder='blur'
        fill
        sizes='100vw'
        loading='eager'
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

export default Diet;

