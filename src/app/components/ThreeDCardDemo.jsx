"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card.js";
import Link from "next/link";
import card1 from '../../../public/images/CARD01.png'
import icon1 from '../../../public/images/ICONO.CARD01.png'

const ThreeDCardDemo= ({props})=> {
  console.log(props)
  return (
    <CardContainer className="rounded-xl min-h-[300px]   h-full w-[60%] lg:w-full  mx-auto flex flex-col    ">
      <Image
              className="h-full rounded-xl"
              alt='min-h-screen'
              src={props.background}
              placeholder="blur"
              fill
              sizes="100vw"
              style={{
              objectFit: 'cover',
              zIndex: -5
              }}
      />
      <CardBody className=" gap-3 group/card w-full h-full  p-6 flex flex-col justify-center items-center   ">
      
      <CardItem translateZ="100" className="h-full  mt-4 ">
      
          <Image
            src={props.icon}
            height="1000"
            width="1000"
            // className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            className="h-[100px] w-[100px]  object-cover bg-fixed bg-center   "

            alt="thumbnail"
          />
        </CardItem>
        
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white text-center  "
        >
          {props.title}
        </CardItem>



      </CardBody>
    </CardContainer>
  );
}

export default ThreeDCardDemo