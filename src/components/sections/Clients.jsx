'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';


import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import CardClient from '../CardClient.jsx';

const Clients = () => {

  const controls = useAnimation();
    const { ref, inView } = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1 });
      }
    }, [controls, inView]);
 

    const [clients,setClients] = useState(
      [{
        before:'/images/clienteAntes01.jpg',
        after:'/images/clienteDespues01.jpg'
      },{
        before:'/images/clienteAntes02.jpg',
        after:'/images/clienteDespues02.jpg'
      },]
    )



  return (
    <section id='clientes' className='snap-start h-[100dvh] md:h-[100vh] min-h-svh relative z-0 flex flex-col justify-end '>
      {/* <Column /> */}
      <div
        
         className='gap-10 container  flex flex-col  lg:flex-row-reverse justify-start lg:justify-start lg:items-start'>
        
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5, ease: "easeIn" }}
         className=' lg:mt-0 flex flex-col w-full  lg:w-[40%] lg:items-end  lg:justify-center  lg:text-end lg:h-[60%]   '>
          <h2 className='titulo pb-4 lg:pb-2 text-center  lg:text-start '>
            CLIENTES
          </h2>
          <span className=' subtitulo inline-flex pt-4 lg:p-0 mx-auto lg:mx-0 lg:pr-4 border-t-4 lg:border-t-0 lg:border-r-5   '>
            PERSONAS QUE CONFIARON EN MI
          </span>
        </motion.div>

        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 1.5, ease: "easeIn" }}
           className='z-99 h-full w-full lg:w-[60%]'>

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
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}

        className=' sm:w-[90%] min-h-[350px] w-full flex items-start justify-start h-full max-h-[80%]    ' >
                  
        {clients.map((client,index)=>(
          <SwiperSlide key={index} className=' rounded-xl eachSlide swiper-no-swiping w-full '>
            <CardClient client={client}/>
          </SwiperSlide>
        ))}
          
      </Swiper>
      

      </motion.div>
        </div>

      <Image
        alt='min-h-screen'
        src='/images/FONDO04.jpg'
        loading='eager'
        // placeholder='blur'
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

