import { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

// NO HAY QUE MODIFICAR NADA ACA
export default function CardClient({ client }) {
  return (
    <article className="rounded-xl flex flex-col items-center justify-start h-full p-2 lg:p-0 w-[75%] mx-auto ">
      <ReactCompareSlider
        boundsPadding={0}
        itemOne={
          <ReactCompareSliderImage
            className="h-full rounded-xl object-cover"
            style={{ filter: "grayscale(100%)" }}
            alt="Image one"
            src={client.before}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            className="h-full rounded-xl object-cover"
            alt="Image two"
            src={client.after}
          />
        }
        keyboardIncrement="5%"
        position={50}
        className="min-h-[60%] sm:min-h-[34.375rem] h-full  w-full md:h-[90%] xl:h-full rounded-xl lg:w-auto   "
      />
    </article>
  );
}
