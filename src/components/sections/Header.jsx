'use client'
import React from 'react'
import Image from "next/image";
import {motion} from 'framer-motion'


const Header = () => {

    const handleMoveToSection = (url) => {
        console.log(url);
        const section = document.getElementById(url);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });     
    };
  return (  

    <section id='inicio' className=' snap-start h-[100dvh] min-h-svh relative z-0  flex flex-col justify-end    '>
        <div className='gap-4 container flex flex-col lg:flex-row justify-between '>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease:"easeIn"}}
        className='  lg:w-1/2 flex flex-col gap-1 lg:h-[80%] items-center lg:items-start'>
                <h2 className='primer-titulo  pb-3 text-center  border-b-4 border-white lg:border-none lg:text-start px-2'>PONETE EN FORMA, <br />
                    SENTITE BIEN, <br />
                    VIVÍ SALUDABLE
                </h2>
                <p className='subtitulo mt-3 w-70 text-center lg:w-full lg:border-l-4 lg:border-white lg:px-4 lg:text-start'>EL MEJOR PLAN DE ENTRENAMIENTO <br/> ADAPTADO PARA VOS</p>
                <button onClick={()=>handleMoveToSection('contact')}
                    className=" montserrat font-extrabold py-1 px-5 mt-4 text-md lg:text-xl lg:italic lg:mt-[10%] lg:py-1 w-1/2 bg-white text-black lg:border-1.5 lg:text-white lg:bg-transparent transition duration-300 ease-in-out lg:hover:bg-black  lg:hover:text-white hover:border-none "
                    >
                    EMPEZA YÁ
                </button>
            {/* </div> */}
            </motion.div>


            <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease:"easeIn"}}  
            className='h-[56%] flex lg:h-full justify-center lg:w-1/2 items-end '>
                <Image
                    className=' w-auto h-full lg:h-[105%] '
                    alt='min-h-screen'
                    src='/images/FER01.png'
                    height={500}
                    width={500}
                    priority
                    
                
                />
            </motion.div>
           
        </div>

        
        <Image
        
        alt='min-h-screen'
        src='/images/FONDO01.jpg'
        fill
        sizes="100vw"
        loading='eager'
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

export default Header