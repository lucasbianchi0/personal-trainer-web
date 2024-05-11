'use client'

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactMe = () => {

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [controls, inView]);
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

    <section  id='contact' className=' snap-start h-[100dvh] min-h-svh relative z-0  flex flex-col justify-end    '>
        <div className='container gap-4  overflow-hidden  flex flex-col  lg:flex-row justify-between'>
        

        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 1.5, ease: "easeIn" }}
  
        className=' lg:w-1/2 flex flex-col lg:h-[60%] items-center lg:items-start lg:justify-center '>
                <h2 className='titulo pb-4 text-center lg:text-start'>
                    Trabajemos juntos
                </h2>
                <p className='pt-4 lg:py-1 subtitulo w-70 text-center leading-5 lg:w-full border-t-4 lg:border-t-0 lg:border-l-4 border-white lg:px-4 lg:text-start'>TENE TU REUNION CONMIGO ESTA SEMANA</p>
                <button  onClick={toggleModal}
                    className="mx-auto lg:mx-0 montserrat font-extrabold italic py-1 px-5 mt-10 text-md sm:text-lg lg:text-md lg:mt-[10%] sm:py-2  inline-block bg-white text-black lg:border-1.5 lg:text-black lg:bg-white transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-none  "
                    >
                    AGENDA UNA REUNION
                </button>

                {visible && (
                  <div
                    className='fixed  top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50'
                    onClick={handleModalClose} 
                  >
                    <div className='relative my-auto rounded-lg h-full w-full max-w-[90%]  max-h-[75%]  lg:max-w-[80%]  '>
                      <button className='absolute top-0 right-0 bg-black text-white py-1 px-2'>SALIR</button>
                      <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ351Hn_54D1Ybx9ySuaiLAo1mHdIemiV2J-6kNZz4wrbWaoLQP4ca3EC_wsuk7WcBfYwjoMVK3A?gv=true"  className=' border-8 w-full h-full bg-white   '  ></iframe>
                    </div>
                  </div>
                )}
              
                
            </motion.div>


            <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 1, ease: "easeIn" }}
            className='flex-grow overflow-hidden flex  lg:h-full  justify-center lg:w-1/2 items-end  '>
                <Image
                    className=' w-auto h-full  lg:max-h-full  '
                    alt='min-h-screen'
                    src='https://res.cloudinary.com/dzvfqgddy/image/upload/v1714598010/FER03_hobvko.png'
                    // placeholder="blur"
                    // fill
                    height={500}
                    width={500}
                    
                    // sizes="50vw"
                
                />
            </motion.div>
           
        </div>

        
        <Image
        
        alt='min-h-screen'
        src='/images/FONDO05.jpg'
        // placeholder="blur"
        fill
        sizes="100vw"
        loading='eager'
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