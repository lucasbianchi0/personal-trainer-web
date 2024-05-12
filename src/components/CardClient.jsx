

import { useState } from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
// import fercolor from '../../../public/images/FERCOLOR.png'
// import fersincolor from '../../../public/images/FERSINCOLOR.png'

export default function CardClient({client}) {

  console.log(client)
  return (
    <article className="rounded-xl flex flex-col items-center justify-start  h-full w-full p-2  ">
      
      <ReactCompareSlider
        boundsPadding={0}
        itemOne={<ReactCompareSliderImage className="h-full rounded-xl object-cover" style={{ filter:"grayscale(100%)"}}  alt="Image one" src={client.before}/>}
        itemTwo={<ReactCompareSliderImage className="h-full rounded-xl object-cover" alt="Image two" src={client.after}/>}
        keyboardIncrement="5%"
        position={50}
        className="min-h-[21.875rem] sm:min-h-[34.375rem] h-full  w-full md:h-[90%] xl:h-full rounded-xl lg:w-auto   "
      />
    </article>
  );
}
