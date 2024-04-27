'use client'

import React, { useState } from 'react'
import Image from "next/image";
import bgContactImg from '../../../public/images/bgContactMe.png'
import fer from '../../../public/images/ferContactMe.png'
import {Button} from "@nextui-org/react";
import Column from '../components/Column';
import {motion} from 'framer-motion'


const ContactMe = () => {
    const [visible, setVisible] = useState(false)

    const toggleModal = ()=>{
        setVisible(!visible)
      }
  
      const handleModalClose = (e) => {
        if (e.target.classList.contains('bg-black')) {
          // Si se hace clic en el fondo oscuro del modal, cierra el modal
          setVisible(false);
        }
      };

  return (  

    <section className=' snap-start h-[100vh] min-h-svh relative z-0  flex flex-col justify-end    '>
        {/* <Column/> */}
        <div className='container gap-4  overflow-hidden  flex flex-col  lg:flex-row lg:justify-between'>
        

        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease:"easeIn"}}
        // whileInView={{opacity:0, opacity:1}}


        // {/* <motion.div
        //     initial={{opacity:0.5, scale:0.5}}
        //     transition={{duration:2}}
        //     whileInView={{opacity:1, scale:1}} */}
        className='  lg:w-1/2 flex flex-col gap-1 lg:h-[80%] items-center lg:items-start'>
                <h2 className='titulo pb-3 text-center border-b-4 border-white lg:border-none lg:text-start'>
                    Trabajemos juntos
                </h2>
                <p className='mt-4 subtitulo w-70 text-center leading-5 lg:w-full lg:border-l-4 lg:border-white lg:px-4 lg:text-start'>TENE TU REUNION CONMIGO ESTA SEMANA</p>
                <button  onClick={toggleModal}
                    className="montserrat font-extrabold italic py-1 px-5 mt-10 text-md lg:text-md lg:mt-[10%] lg:py-2 w-1/2 bg-white text-black lg:border-1.5 lg:text-black lg:bg-white transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-none "
                    >
                    AGENDA UNA REUNION
                </button>

                {visible && (
                  <div
                    className='fixed  top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50'
                    onClick={handleModalClose} 
                  >
                    <div className=' my-auto rounded-lg h-full w-full max-w-[95%]  max-h-[75%]  lg:max-w-[80%]  border-8'>
                      <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ351Hn_54D1Ybx9ySuaiLAo1mHdIemiV2J-6kNZz4wrbWaoLQP4ca3EC_wsuk7WcBfYwjoMVK3A?gv=true"  className=' border-8 w-full h-full bg-white   '  ></iframe>
                    </div>
                  </div>
                )}
              
                
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
        src={bgContactImg}
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

export default ContactMe