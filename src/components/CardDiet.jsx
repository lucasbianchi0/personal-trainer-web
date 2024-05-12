import Image from 'next/image'
import React from 'react'


const CardDiet = ({ props }) => {
    return (
      <div className="relative min-h-[19.6875rem] h-[80%] w-[65%] sm:min-h-[33.125rem] sm:h-[80%] sm:w-[70%] lg:min-h-[16.25rem] md:h-[80%] lg:w-full lg:h-[70%] mx-auto flex flex-col group">
        <div className="absolute z-10 p-6 flex flex-col justify-center items-center w-full h-full lg:group-hover:scale-110 lg:transition-transform lg:duration-300">
          <div className="h-[6.25rem] w-[6.25rem] object-cover bg-fixed bg-center lg:group-hover:scale-110 lg:transition-transform lg:duration-300 ">
            <Image
              src={props.icon}
              height={500}
              width={500}
              className="h-[6.25rem] w-[6.25rem] object-cover bg-fixed bg-center"
              alt="thumbnail"
              loading="eager"
            />
          </div>
          <p className="mt-2 text-xl md:text-3xl lg:text-xl font-bold text-white text-center lg:group-hover:scale-100 lg:transition-transform duration-300">
            {props.title}
          </p>
        </div>
        
        <Image
          className="h-full rounded-3xl lg:group-hover:brightness-50 lg:transition-filter lg:duration-300"
          alt="min-h-screen"
          src={props.background}
          height={500}
          width={500}
          loading="eager"
          style={{
            objectFit: 'cover',
            zIndex: -5,
          }}
        />
        
 
      </div>
    );
  };
  
  export default CardDiet;