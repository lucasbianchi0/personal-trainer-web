"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section
      id="inicio"
      className=" snap-start h-[100dvh] min-h-svh relative z-0  flex flex-col justify-end    "
    >
      <div className="gap-4 container flex flex-col lg:flex-row justify-between ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeIn" }}
          className="  lg:w-1/2 flex flex-col gap-1 lg:h-[80%] items-center lg:items-start"
        >
          {/* TITULOS */}
          <h2 className="primer-titulo  pb-3 text-center  border-b-4 border-[#daa520] lg:border-none lg:text-start px-2">
            PONETE EN FORMA, <br />
            SENTITE BIEN, <br />
            VIVÍ SALUDABLE
          </h2>
          {/* SUBTITULO */}
          <p className="subtitulo mt-3 w-70 text-center lg:w-full lg:border-l-4 lg:border-l-[#daa520] lg:px-4 lg:text-start">
            EL MEJOR PLAN DE ENTRENAMIENTO <br /> ADAPTADO PARA VOS
          </p>
          {/* BOTON */}
          <a
            href="https://wa.me/5491140496517"
            className="botones custom font-extrabold py-1 mt-4 text-md lg:text-xl lg:mt-[10%] lg:py-1 w-1/2  "
          >
            EMPEZA YÁ
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeIn" }}
          className="h-[56%] flex lg:h-full justify-center lg:w-1/2 items-end "
        >
          {/* IMAGEN TUYA */}
          <Image
            className=" w-auto h-full lg:h-[105%] "
            alt="min-h-screen"
            src="/images/FER01.png"
            height={500}
            width={500}
            priority
          />
        </motion.div>
      </div>

      {/* IMAGEN FONDO DE PANTALLA */}
      <Image
        alt="min-h-screen"
        src="/images/FONDO01.jpg"
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

export default Header;
