"use client";
import React, { useEffect } from "react";
import Image from "next/image";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// •Plan de entrenamiento online + seguimiento diario ( 1 mes )
// •Plan de entrenamiento online + acompañiento nutricional avalado por una nutricionista ( 1 mes) .
// •Plan de entrenamiento online + acompañiento nutricional avalado por una nutricionista ( 3 meses) .
// •Plan de entrenamiento online + seguimiento diario( 3 meses )
// •Plan de entrenamiento presencial

const AboutMe = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const planes = [
    {
      titulo: "Plan de entrenamiento mensual",
      tipo: "online",
      tooltip: "Seguimiento diario",
    },
    {
      titulo:
        "Plan de entrenamiento mensual + plan nutricional por una nutricionista mensual",
      tipo: "online",
      tooltip: "Seguimiento diario",
    },
    {
      titulo:
        "Plan de entrenamiento mensual + plan nutricional por una nutricionista de 3 meses",
      tipo: "online",
    },
    {
      titulo: "Plan de entrenamiento de 3 meses",
      tipo: "online",
    },
    {
      titulo: "Entrenamiento mensual",
      tipo: "Presencial",
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
        {/* <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 1, ease: "easeIn" }}
            className='  flex h-[65%]  lg:h-full w-auto justify-center lg:w-1/2 items-end  '>
            <Image
                className=' w-auto h-full lg:h-[110%]'
                alt='min-h-screen' 
                src='/images/FER02.png'
                // placeholder="blur"
                // blurDataURL={PLACEHOLDER_IMAGE}
                // fill
                height={500}
                width={500}
                // sizes="50vw"
            
            />
        </motion.div> */}

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 1, ease: "easeIn" }}
          className="p-2 lg:w-1/2 flex flex-col gap-2 lg:gap-10 lg:h-[80%] justify-start items-center lg:justify-start lg:items-start"
        >
          <h2 className="titulo text-center lg:text-start colus">
            Fernando <br />
            <span className="titulo text-4xl md:text-5xl xl:text-6xl">
              Casares
            </span>
          </h2>
          <div className="subtitulo-aboutme  text-center flex flex-col gap-2 sm:gap-1  lg:gap-5  lg:border-l-4 px-7  lg:text-start mt-4 lg:mt-0 ">
            <p>PERSONAL TRAINER CERTIFICADO</p>
            <p>CERTIFICADO EN NUTRICIÓN DEPORTIVA</p>
            <p>FISICOCULTURISTA EN CONSTANTE FORMACIÓN Y APRENDIZAJE</p>
            <p>+10 AÑOS DE EXPERIENCIA</p>
          </div>
        </motion.div>

        <motion.div className="hidden lg:block w-1/2 ">
          <div className="w-full gap-x-5 gap-y-5 p-0 m-0 flex flex-wrap ">
            {planes.map((plan, index) => (
              <div
                key={index}
                className="transition-transform hover:scale-105 !bg-zinc-800 bg-transparent rounded-md montserrat uppercase w-[48%] h-[130px] mb-3 p-2 relative flex justify-center items-center border border-zinc-500 shadow-xl"
              >
                <p className="absolute -top-3 right-2 py-1 px-3 bg-white text-xs shadow-lg">
                  {plan.tipo}
                </p>
                <p className="text-md p-1 font-semibold text-white text-center">
                  {plan.titulo}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="block lg:hidden w-full h-full mt-5">
          <div className="w-full flex flex-wrap  h-[88%]">
            <Swiper
              modules={[
                Navigation,
                // ,Pagination
              ]}
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
              {planes.map((plan, index) => (
                <SwiperSlide key={index} className=" w-full  ">
                  <div
                    key={index}
                    className="px-5 flex flex-col w-[70%] mx-auto !bg-zinc-800 bg-transparent rounded-md montserrat uppercase h-full mb-3 relative justify-center items-center border border-zinc-500 shadow-xl"
                  >
                    <p className="flex-1 text-md lg:text-2xl p-1 font-semibold text-white text-center flex items-center">
                      {plan.titulo}
                    </p>

                    <p className="h-[20%] py-1 px-3 text-zinc-400 shadow-lg">
                      {plan.tipo}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
      <Image
        alt="min-h-screen"
        src="/images/FONDO02.jpg"
        loading="eager"
        // placeholder="blur"
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
