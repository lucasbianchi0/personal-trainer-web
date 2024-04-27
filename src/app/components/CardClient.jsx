'use client'
import { useState } from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import fercolor from '../../../public/images/FERCOLOR.png'
import fersincolor from '../../../public/images/FERSINCOLOR.png'
export default function CardClient() {

  
  return (
    <div className=" flex flex-col items-center justify-start h-full w-full  ">
      
      <ReactCompareSlider
        boundsPadding={0}
        itemOne={<ReactCompareSliderImage className="h-full" style={{ filter:"grayscale(100%)"}}  alt="Image one" src='https://live.staticflickr.com/7125/7701224380_263bf8910e_z.jpg'/>}
        itemTwo={<ReactCompareSliderImage className="h-full" alt="Image two" src='https://live.staticflickr.com/7125/7701224380_263bf8910e_z.jpg'/>}
        keyboardIncrement="5%"
        position={50}
        className="h-50vh w-full lg:h-full rounded-xl lg:w-auto  lg:bg-blue-400 "
        // style={{
        //   height: '50vh',
        //   width: '100%'
        // }}
      />
    </div>
  );
}
