'use client'
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import diet from '../../../public/images/FONDO03.jpg';
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

const Diet = () => {

  const controls = useAnimation();
    const { ref, inView } = useInView();
  
    React.useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1 });
      }
    }, [controls, inView]);
  const cards = [
    {
        title:"DIETA GENERAL",
        icon:IconCard1,
        background:cardGen,
    },
    {
        title:"DIETA VEGETARIANA",
        icon:IconCard2,
        background:cardVeggie,
    },
    {
        title:"DIETA LIBRE DE GLUTEN",
        icon:IconCard3,
        background:cardFlex,
    },
    {
        title:"DIETA FLEXIBLE",
        icon:IconCard4,
        background:cardFreeg,
    },    {
      title:"DIETA sapelokit",
      icon:IconCard4,
      background:cardFreeg,
  }
  ]



  return (
    <section className='snap-start h-[100vh] min-h-svh relative z-0 flex flex-col justify-end'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 1, ease: "easeIn" }}
         className=' gap-10 lg:gap-8 container flex flex-col justify-start lg:justify-start mx-auto  '>
        <div className=' w-[270px] mx-auto lg:w-full lg:items-start flex flex-col justify-center'>
            <h2 className='titulo mx-auto inline-block pb-5 lg:pb-1 text-center lg:text-left  border-b-4 border-white lg:border-none lg:m-0 '>
              LA <br />
              ALIMENTACION
            </h2>

            <p className='subtitulo  px-4 lg:border-l-5 text-center lg:text-start mt-4 max-w-[480px]'>
              LOS CIMIENTOS PARA EL CAMBIO FISICO Y TU BIENESTAR
            </p>
        </div>

        <div className=' z-99 h-[60%] w-full   '>
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
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
            
          },
        }}

        className='min-h-[200px] h-full max-h-full  w-full sm:w-[90%] lg:w-full  max-w-full rounded-xl lg:!px-16  '
      >
                    

        {cards.map(card =>(
          <SwiperSlide key={card.title} className=' w-full h-full  '>
            
            <ThreeDCardDemo  props={card} />
          </SwiperSlide>))}
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

export default Diet;

