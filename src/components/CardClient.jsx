

import { useState } from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
// import fercolor from '../../../public/images/FERCOLOR.png'
// import fersincolor from '../../../public/images/FERSINCOLOR.png'

export default function CardClient({client}) {

  console.log(client)
  return (
    <article className="rounded-xl flex flex-col items-center justify-start h-full w-full p-2  ">
      
      <ReactCompareSlider
        boundsPadding={0}
        itemOne={<ReactCompareSliderImage className="h-full rounded-xl" style={{ filter:"grayscale(100%)"}}  alt="Image one" src={client.before}/>}
        itemTwo={<ReactCompareSliderImage className="h-full rounded-xl" alt="Image two" src={client.after}/>}
        keyboardIncrement="5%"
        position={50}
        className="min-h-[350px] sm:min-h-[550px] w-full lg:h-full rounded-xl lg:w-auto   "
      />
    </article>
  );
}
