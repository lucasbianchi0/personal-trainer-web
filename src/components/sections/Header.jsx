'use client'
import React from 'react'
import Image from "next/image";
import {motion} from 'framer-motion'
 

const PLACEHOLDER_IMAGE = 'data:image/webp;base64,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'



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
        {/* <Column/> */}
        <div className='gap-4 container  overflow-hidden   flex flex-col  lg:flex-row justify-between  '>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease:"easeIn"}}
        // whileInView={{opacity:0, opacity:1}}


        // {/* <motion.div
        //     initial={{opacity:0.5, scale:0.5}}
        //     transition={{duration:2}}
        //     whileInView={{opacity:1, scale:1}} */}
        className='  lg:w-1/2 flex flex-col gap-1   lg:h-[80%] items-center lg:items-start'>
                <h2 className='primer-titulo  pb-3 text-center   border-b-4 border-white lg:border-none lg:text-start px-2'>PONETE EN FORMA, <br />
                    SENTITE BIEN, <br />
                    VIVI SALUDABLE
                </h2>
                <p className='subtitulo mt-3 w-70 text-center lg:w-full lg:border-l-4 lg:border-white lg:px-4 lg:text-start'>EL MEJOR PLAN DE ENTRENAMIENTO <br/> ADAPTADO PARA VOS</p>
                <button onClick={()=>handleMoveToSection('contact')}
                    className=" montserrat font-extrabold py-1 px-5 mt-4 text-md lg:text-xl lg:italic lg:mt-[10%] lg:py-1 w-1/2 bg-white text-black lg:border-1.5 lg:text-white lg:bg-transparent transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-none "
                    >
                    EMPEZA YA
                </button>
            {/* </div> */}
            </motion.div>


            <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease:"easeIn"}}  
            className='h-[56%] overflow-hidden flex lg:h-full  justify-center lg:w-1/2 items-end  '>
                <Image
                    className=' w-auto h-full  lg:max-h-full  '
                    alt='min-h-screen'
                    // src={fer}
                    src='/images/FER01.png'
                    // placeholder="blur"
                    // blurDataURL={PLACEHOLDER_IMAGE}
                    // fill
                    height={500}
                    width={500}
                    
                    // sizes="50vw"
                
                />
            </motion.div>
           
        </div>

        
        <Image
        
        alt='min-h-screen'
        src='/images/FONDO01.jpg'
        // placeholder="blur"
        fill
        sizes="100vw"
        // style={{ objectFit: 'cover',backgroundSize: 'contain', width: '100%', height: '100%' , zIndex: -1 }}
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