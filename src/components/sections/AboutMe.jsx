'use client'
import React, { useEffect } from 'react'
import Image from "next/image";

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const AboutMe = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1 });
      }
    }, [controls, inView]);
  return (
    <section id='sobre-mi' className=' snap-start h-[100dvh] md:h-[100vh] min-h-svh relative z-0  flex flex-col justify-end   '>   
      <div className='  container  flex flex-col-reverse lg:flex-row justify-between  '> 
        <motion.div
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
        </motion.div>

        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 1, ease: "easeIn" }}
            className='p-2 lg:w-1/2 flex flex-col gap-2 lg:gap-10 lg:h-[80%] justify-end items-center lg:justify-start lg:items-end'>
            
              <h2 className='titulo text-center lg:text-end colus'>
                Fernando <br />
                <span className='titulo text-4xl md:text-5xl xl:text-6xl'>Casares</span>
              </h2>                    
              <div className='subtitulo-aboutme  text-center flex flex-col gap-2 sm:gap-1  lg:gap-5  lg:border-r-4 px-7  lg:text-end mt-4 lg:mt-0 '>
                <p >PERSONAL TRAINER CERTIFICADO</p>
                <p>CERTIFICADO EN NUTRICIÓN DEPORTIVA</p>
                <p>FISICULTURISTA EN CONSTANTE FORMACIÓN Y APRENDIZAJE</p>
                <p>+10 AÑOS DE EXPERIENCIA</p>
            </div>
        </motion.div>

      
      </div>   
      <Image
        alt='min-h-screen'
        src='/images/FONDO02.jpg'
        loading='eager'
        // placeholder="blur"
        fill
        sizes="100vw"
        style={{
            objectFit: 'cover',
            zIndex: -5,
            backgroundAttachment:"fixed",
            backgroundPosition:"center"
        }}
      />
    
    </section>
  )
}

export default AboutMe