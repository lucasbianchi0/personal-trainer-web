"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import CardDiet from "../CardDiet";

const Diet = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [controls, inView]);

  // CARDS DE DIETA -> TITULO, EL ICONO QUE FIGURA Y LA IMAGEN DEL FONDO
  const dietPlans = [
    {
      id: 0,
      title: "DIETA GENERAL",
      icon: "/images/ICONO.CARD01.png",
      background: "/images/CARD01.png",
      text: [
        'asdasdasdada',
        'fdanjsfoicandasda',
        'fwinoancacasdasc',
        'canjopdchnwaconapc',
      ]
    },
    {
      id: 1,
      title: "DIETA VEGETARIANA",
      icon: "/images/ICONO.CARD02.png",
      background: "/images/CARD02.png",
      text: [
        'asdasdasdada',
      ]
    },
    {
      id: 2,
      title: "DIETA LIBRE DE GLUTEN",
      icon: "/images/ICONO.CARD03.png",
      background: "/images/CARD03.png",
      text: [
        'asdasdasdada',
        'fwinoancacasdasc',
        'canjopdchnwaconapc',
      ]
    },
    {
      id: 3,
      title: "DIETA FLEXIBLE",
      icon: "/images/ICONO.CARD04.png",
      background: "/images/CARD04.png",
      text: [
        'asdasdasdada',
        'fdanjsfoicandasda',
      ]
    },
  ];

  const [isActive, setIsActive] = useState([true,true,true,true]);

  const handleMoveToSection = (id) => {
    const a = isActive.map((item, index) => index === id ? !isActive[id] : true)
    setIsActive(a);
  };

  return (
    <section
      id="alimentacion"
      className="snap-start h-[100dvh] md:h-[100vh] min-h-svh relative z-0 flex flex-col justify-end"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 1, ease: "easeIn" }}
        className=" gap-10 lg:gap-14 container flex flex-col justify-start mx-auto"
      >
        <div className=" w-[90%]  mx-auto lg:w-full flex flex-col justify-center items-center">
          {/* TITULO */}
          <h2 className="titulo mx-auto inline-block pb-4 lg:pb-1 text-center lg:text-left   lg:m-0 ">
            LA ALIMENTACIÓN
          </h2>
          {/* DESCRIPCION */}
          <p className="subtitulo  px-4 text-center pt-4 max-w-[30rem] border-t-4 lg:border-none border-[#daa520]  ">
            LOS CIMIENTOS PARA EL CAMBIO FÍSICO Y TU BIENESTAR
          </p>
        </div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
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
          className="min-h-[12.5rem] flex-grow w-full sm:w-[90%] lg:w-full  max-w-full rounded-xl lg:!px-16   "
        >
          {dietPlans.map((card) => (
            <SwiperSlide key={card.title} className=" w-full  ">
              <CardDiet props={card} props2={isActive} props3={handleMoveToSection} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* IMAGEN DEL FONDO DE PANTALLA */}
      <Image
        alt="min-h-screen"
        src="/images/FONDO03.jpg"
        fill
        sizes="100vw"
        loading="eager"
        style={{
          objectFit: "cover",
          zIndex: -5,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      />
    </section>
  );
};

export default Diet;
