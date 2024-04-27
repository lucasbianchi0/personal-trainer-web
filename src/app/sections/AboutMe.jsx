import React from 'react'
import Image from "next/image";
import bgimage from '../../../public/images/FONDO02.jpg'
import fer from '../../../public/images/ferheader.png'
import {Button} from "@nextui-org/react";
import Column from '../components/Column';
import aboutMeBg from '../../../public/images/aboutMeBg.png'
// import ferAboutMe from '../../../public/images/ferAboutMe.png'
import ferAboutMe from '../../../public/images/FER02.png'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const AboutMe = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView();
  
    React.useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1 });
      }
    }, [controls, inView]);
  return (
    <section className=' snap-start h-[100vh] min-h-svh relative z-0  flex flex-col justify-end   '>
            {/* <Column/> */}
            
            <div
      
    
    
             className='  container  flex flex-col-reverse justify-start lg:flex-row lg:justify-between  '>
                
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 1.5, ease: "easeIn" }}
                    className='  flex h-[65%]  lg:h-full w-auto   justify-center lg:w-1/2 items-end    '>
                    <Image
                        className=' w-auto h-full  lg:max-h-full '
                        alt='min-h-screen' 
                        src={ferAboutMe}
                        placeholder="blur"
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
                 className='p-2 h-[35%]   lg:w-1/2 flex flex-col gap-2 lg:gap-10   lg:h-[80%] justify-end items-center lg:justify-start lg:items-end'>
                    
                      <h2 className='titulo text-center lg:text-end colus'>
                        Fernando <br />
                        <span className='titulo text-4xl lg:text-5xl xl:text-6xl'>casares</span>
                      </h2>                    <div className='subtitulo  text-center flex flex-col gap-2 sm:gap-1  lg:gap-5  lg:border-r-4 px-7  lg:text-end '>
                        <p className=''>PERSONA TRAINER CERTIFICADO</p>
                        <p>CERTIFICADO EN NUTRICION DEPORTIVA</p>
                        <p>FISICULTURISTA EN CONSTANTE FORMACION Y APRENDIZAJE</p>
                        <p>+10 AÑOS DE EXPERIENCIA</p>
                    </div>
                </motion.div>

            
            </div>


            
            <Image
            
            alt='min-h-screen'
            src={aboutMeBg}
            placeholder="blur"
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