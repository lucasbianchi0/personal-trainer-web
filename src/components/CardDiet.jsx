import Image from "next/image";
import React from "react";

// NO HAY QUE MODIFICAR NADA ACA
const CardDiet = ({ props, props2, props3 }) => {
  const send = (id) => {
    props3(id)
  }

  return (
    <div style={{ cursor: "pointer" }} onClick={() => send(props.id)} className="relative min-h-[19.6875rem] h-[85%] w-[65%] sm:min-h-[33.125rem] sm:h-[80%] sm:w-[70%] lg:min-h-[16.25rem] md:h-[85%] lg:w-full lg:h-[80%] mx-auto flex flex-col group">
      <div className={`lg:transition-opacity lg:duration-300 ${props2[props.id] ? "opacity-100" : "opacity-0"}`}>
      <div className={`absolute z-10 p-6 flex items-center w-full h-full lg:group-hover:scale-110 lg:transition-transform  flex-col justify-center lg:transition-opacity lg:duration-300`}>
        <div className={`h-[100px] w-[6.25rem] object-cover bg-fixed bg-center lg:group-hover:scale-110 lg:transition-transform lg:duration-300 `}
        /* h-[100px] w-[6.25rem] object-cover bg-fixed bg-center lg:group-hover:scale-110 lg:transition-transform lg:duration-300 
        className={`text-white montserrat flex w-full text-sm relative ${isActive === menuItem.url + "-B" ? "linea" : "subrayado"}`}*/>
          <Image
            src={props.icon}
            height={500}
            width={500}
            className="h-auto w-full object-cover bg-fixed bg-center 0"
            alt="thumbnail"
            loading="eager"
          />
        </div>
        <p className="mt-2 text-xl md:text-3xl lg:text-xl font-bold text-white text-center lg:group-hover:scale-100 lg:transition-transform duration-300">
          {props.title}
        </p>
      </div>
      </div>
      <div className={`lg:transition-opacity lg:duration-300 ${!props2[props.id] ? "opacity-100" : "opacity-0"}`}>
        <div className={`absolute z-10 p-6 flex items-center w-full h-full lg:group-hover:scale-95 lg:transition-transform  flex-col justify-center lg:transition-opacity lg:duration-300`}>
          <p className="absolute -top-0 py-1 px-3 text-xl md:text-3xl lg:text-xl font-bold text-white text-center lg:group-hover:scale-100 lg:transition-transform duration-300">
            {props.title}
          </p>
          <ul>
            {props.text.map((text, index) => (
              <li key={index} className="mt-2 text-xl md:text-3xl lg:text-xl font-bold text-white text-start lg:group-hover:scale-100 lg:transition-transform duration-300">
                - {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Image
        className="h-full rounded-3xl lg:group-hover:brightness-50 lg:transition-filter lg:duration-300"
        alt="min-h-screen"
        src={props.background}
        height={500}
        width={500}
        loading="eager"
        style={{
          objectFit: "cover",
          zIndex: -5,
        }}
      />
    </div>
  );
};

export default CardDiet;
