"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SlSocialYoutube } from "react-icons/sl";
import { AiFillTikTok } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";

const ContactMe = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [controls, inView]);
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const handleModalClose = (e) => {
    if (e.target.classList.contains("bg-black")) {
      setVisible(false);
    }
  };

  return (
    <section
      id="contact"
      className=" snap-start h-[100dvh] min-h-svh relative z-0 flex flex-col justify-end "
    >
      <div className="container gap-4  overflow-hidden  flex flex-col  lg:flex-row justify-between">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 1.5, ease: "easeIn" }}
          className=" lg:w-1/2 flex flex-col lg:h-[60%] items-center lg:items-start lg:justify-center "
        >
          {/* TITULO */}
          <h2 className="titulo pb-4 text-center lg:text-start">
            Trabajemos juntos
          </h2>
          {/* DESCRIPCION */}
          <p className="pt-4 lg:py-1 subtitulo w-70 text-center leading-5 lg:w-full border-t-4 lg:border-t-0 lg:border-l-4 border-white lg:px-4 lg:text-start">
            TENÉ TU REUNION CONMIGO ESTA SEMANA
          </p>
          {/* BOTON */}
          <a
            href="https://wa.me/5491140496517"
            className="botones px-5 mx-auto lg:mx-0 font-extrabold italic py-1 mt-10 text-md sm:text-lg lg:text-md lg:mt-[10%] sm:py-2 items-center bg-white text-black  hover:text-white gap-2 "
          >
            ESCRIBIME
          </a>

          <div className="flex justify-between absolute bottom-10 md:bottom-20 gap-5 md:gap-6 cursor-pointer lg:relative lg:bottom-0 lg:mt-10">
            {/* LINK YOUTUBE */}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SlSocialYoutube className="text-white h-10 w-10 " />
            </a>

            {/* LINK TIKTOK */}
            <a
              href="https://www.tiktok.com/@feermcasares?_t=8noEkXrysDt&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="text-white h-10 w-10" />
            </a>

            {/* LINK INSTAGRAM */}
            <a
              href="https://www.instagram.com/feer.casares?igsh=emh2MXd4dmh6Y2gw&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram className="text-white h-10 w-10 " />
            </a>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 1, ease: "easeIn" }}
          className="flex-grow overflow-hidden flex  lg:h-[110%]  justify-center lg:w-1/2 items-end  "
        >
          {/* IMAGEN TUYA DEL FINAL*/}
          <Image
            className=" w-auto h-full lg:max-h-full "
            alt="min-h-screen"
            src="/images/FER03.png"
            height={500}
            width={500}
          />
        </motion.div>
      </div>

      {/* IMAGEN DE FONDO DE PANTALLA */}
      <Image
        alt="min-h-screen"
        src="/images/FONDO05.jpg"
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

export default ContactMe;
