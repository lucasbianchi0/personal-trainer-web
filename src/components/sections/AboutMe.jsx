"use client";
import React, { useEffect } from "react";
import Image from "next/image";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import PLAN1 from "../../../public/images/PLAN1.jpg";
import PLAN2 from "../../../public/images/PLAN2.jpg";
import PLAN3 from "../../../public/images/PLAN3.jpg";
import PLAN4 from "../../../public/images/PLAN4.jpg";
import PLAN5 from "../../../public/images/PLAN5.jpg";

const AboutMe = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  // MODIFICAR LOS PLANES -> TITULO, TIPO Y FONDO DE IMAGEN
  const plans = [
    {
      title: "Plan de entrenamiento mensual",
      type: "online",
      background_image: PLAN1,
    },
    {
      title:
        "Plan de entrenamiento mensual + plan nutricional por una nutricionista mensual",
      type: "online",
      background_image: PLAN2,
    },
    {
      title:
        "Plan de entrenamiento mensual + plan nutricional por una nutricionista de 3 meses",
      type: "online",
      background_image: PLAN3,
    },
    {
      title: "Plan de entrenamiento de 3 meses",
      type: "online",
      background_image: PLAN4,
    },
    {
      title: "Entrenamiento mensual",
      type: "Presencial",
      background_image: PLAN5,
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [controls, inView]);
  return (
    <section
      id="sobre-mi"
      className=" snap-start h-[100dvh] md:h-[100vh] min-h-svh relative z-0  flex flex-col justify-end   "
    >
      <div className="  container  flex flex-col lg:flex-row justify-between  ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 1, ease: "easeIn" }}
          className="p-2 lg:w-1/2 flex flex-col gap-2 lg:gap-10 lg:h-[80%] justify-start items-center lg:justify-start lg:items-start"
        >
          {/* TITUTLO */}
          <h2 className="titulo text-center lg:text-start colus">
            Fernando <br />
            <span className="titulo text-4xl md:text-5xl xl:text-6xl">
              Casares
            </span>
          </h2>
          {/* DESCRIPCION */}
          <div className="subtitulo-aboutme  text-center flex flex-col gap-2 sm:gap-1  lg:gap-5  lg:border-l-4 px-7  lg:text-start mt-4 lg:mt-0 ">
            <p>PERSONAL TRAINER CERTIFICADO</p>
            <p>CERTIFICADO EN NUTRICIÓN DEPORTIVA</p>
            <p>FISICOCULTURISTA EN CONSTANTE FORMACIÓN Y APRENDIZAJE</p>
            <p>+10 AÑOS DE EXPERIENCIA</p>
          </div>
        </motion.div>

        <motion.div className="hidden lg:block w-1/2 ">
          <div className="w-full gap-x-5 gap-y-5 p-0 m-0 flex flex-wrap ">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="filter grayscale hover:filter-none transition-transform hover:scale-105 bg-cover bg-center rounded-md w-[48%] h-[130px] mb-3  relative  border border-zinc-500 shadow-xl"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${plan.background_image.src})`,
                }}
              >
                <div className="flex justify-center items-center montserrat uppercase p-2 h-full">
                  <p className="absolute -top-3 right-2 py-1 px-3 bg-white text-xs shadow-lg">
                    {plan.type}
                  </p>
                  <p className="text-md p-1 font-semibold text-white text-center">
                    {plan.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="block lg:hidden w-full h-full mt-5">
          <div className="w-full flex flex-wrap  h-[88%]">
            <Swiper
              modules={[Navigation]}
              navigation={true}
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
              }}
              className=" flex-grow w-full sm:w-[90%] lg:w-full  max-w-full rounded-xl lg:!px-16 p-10   "
            >
              {plans.map((plan, index) => (
                <SwiperSlide key={index} className=" w-full  ">
                  <div
                    key={index}
                    className="rounded-3xl h-[90%] w-[65%] sm:h-[80%] sm:w-[70%] lg:min-h-[16.25rem] md:h-[85%] lg:w-full lg:h-[80%] px-5 flex flex-col  bg-cover bg-center mx-auto montserrat uppercase mb-3 relative justify-center items-center border border-zinc-500 shadow-xl"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${plan.background_image.src})`,
                    }}
                  >
                    <p className="shadow-xl flex-1 text-md lg:text-2xl p-1 font-semibold text-white text-center flex items-center">
                      {plan.title}
                    </p>

                    <p className="h-[20%] py-1 px-3 text-md font-medium text-[#b38f6a] shadow-lg">
                      {plan.type}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>

      {/* IMAGEN DE FONDO DE PANTALLA */}
      <Image
        alt="min-h-screen"
        src="/images/FONDO02.jpg"
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

export default AboutMe;
