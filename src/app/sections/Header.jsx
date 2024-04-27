
import React from 'react'
import Image from "next/image";
import bgimage from '../../../public/images/FONDO01.jpg'
import fer from '../../../public/images/FER01.png'
import {Button} from "@nextui-org/react";
import Column from '../components/Column';
import {motion} from 'framer-motion'




const Header = () => {
  return (  

    <section className=' snap-start h-[100vh] min-h-svh relative z-0  flex flex-col justify-end    '>
        {/* <Column/> */}
        <div className='gap-4 container  overflow-hidden   flex flex-col  lg:flex-row lg:justify-between  '>
        

        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease:"easeIn"}}
        // whileInView={{opacity:0, opacity:1}}


        // {/* <motion.div
        //     initial={{opacity:0.5, scale:0.5}}
        //     transition={{duration:2}}
        //     whileInView={{opacity:1, scale:1}} */}
        className='  lg:w-1/2 flex flex-col gap-2   lg:h-[80%] items-center lg:items-start'>
                <h2 className='titulo  pb-3 text-center   border-b-4 border-white lg:border-none lg:text-start px-2'>PONETE EN FORMA, <br />
                    SENTITE BIEN, <br />
                    VIVI SALUDABLE
                </h2>
                <p className='mt-3 montserrat font-medium lg:font-normal w-70 text-center text-md lg:text-2xl  leading-5 text-gray-200 lg:w-full  lg:border-l-4 lg:border-white lg:px-4     lg:text-start'>EL MEJOR PLAN DE ENTRENAMIENTO <br/> ADAPTADO PARA VOS</p>
                <button 
                    className="montserrat font-extrabold italic py-1 px-5 mt-2 text-md lg:text-xl lg:mt-[10%] lg:py-2 w-1/2 bg-white text-black lg:border-1.5 lg:text-white lg:bg-transparent transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-none "
                    >
                    EMPEZA YA
                </button>
            {/* </div> */}
            </motion.div>


            <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease:"easeIn"}}  
            className='h-[70%] overflow-hidden flex  lg:h-full  justify-center lg:w-1/2 items-end  '>
                <Image
                    className=' w-auto h-full  lg:max-h-full  '
                    alt='min-h-screen'
                    src={fer}
                    placeholder="blur"
                    // fill
                    height={500}
                    width={500}
                    
                    // sizes="50vw"
                
                />
            </motion.div>
           
        </div>

        
        <Image
        
        alt='min-h-screen'
        src={bgimage}
        placeholder="blur"
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