"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import CardClient from "../CardClient.jsx";

const Clients = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [controls, inView]);

  // RUTAS DE IMAGENES DE CLIENTES ANTES Y DESPUES
  // SI AGREGAS UN OBJETO NUEVO SE AGREGA OTRO CLIENTE
  const clients = [
    {
      before: "/images/clienteAntes01.jpg",
      after: "/images/clienteDespues01.jpg",
    },
    {
      before: "/images/clienteAntes02.jpg",
      after: "/images/clienteDespues02.jpg",
    },
    {
      before: "/images/cambioAntes03.png",
      after: "/images/cambioDespues03.png",
    },
    {
      before: "/images/cambioAntes04.png",
      after: "/images/cambioDespues04.png",
    },
  ];

  return (
    <section
      id="clientes"
      className="snap-start h-[100dvh] md:h-[100vh] min-h-svh relative z-0 flex flex-col justify-end "
    >
      <div className="lg:gap-10 container  flex flex-col  lg:flex-row-reverse justify-start lg:justify-start lg:items-start">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="p-2 lg:w-1/2 flex flex-col gap-2 lg:gap-10 lg:h-[80%] justify-end items-center lg:justify-start lg:items-end"
        >
          {/* TITULO */}
          <h2 className="titulo text-center  lg:text-end ">
            TRANSFORMÁ TU CUERPO CONMIGO
          </h2>
          {/* DESCRIPCION */}
          <div className="subtitulo-aboutme  text-right flex flex-col gap-2 sm:gap-1  lg:gap-5  border-r-4 border-[#daa520] px-7  lg:text-end mt-4 lg:mt-0 ">
            <p>AUMENTO DE MASA MUSCULAR</p>
            <p>PERDIDA DE GRASA</p>
            <p>PREPARACIÓN PARA COMPETIR</p>
            <p>DESARROLLO DE LA FUERZA (POWERLIFTING)</p>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 1.5, ease: "easeIn" }}
          className="z-99 h-full w-full lg:w-[60%]"
        >
          <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={50}
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
            className="sm:w-[90%] w-full flex items-start justify-start h-[88%] sm:h-[80%] lg:max-h-[80%] "
          >
            {clients.map((client, index) => (
              <SwiperSlide
                key={index}
                className="rounded-xl eachSlide swiper-no-swiping w-full"
              >
                <CardClient client={client} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* IMAGEN DE FONDO DE PANTALLA */}
      <Image
        alt="min-h-screen"
        src="/images/FONDO04.jpg"
        loading="eager"
        fill
        sizes="100vw"
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

export default Clients;
