import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import cardGen from '../../../public/images/cardGen.png';
import cardVeggie from '../../../public/images/cardVeggie.png';
import cardFlex from '../../../public/images/cardFlex.png';
import cardFreeg from '../../../public/images/cardFreeg.png';
function Responsive() {
    const cards = [cardGen, cardVeggie, cardFlex, cardFreeg];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="snap-center  h-[100vh] min-h-svh flex flex-col  ">
        <p className="text-[50px] mt-[50px]">sapee</p>
    <div className="slider-container  bg-gray-400 m-0 h-full flex flex-col justify-center items-center">
      <Slider {...settings} className='mx-auto w-full p-1 bg-blue-300'>
        {cards.map((card, index) => (
              <div key={index} className='bg-red-200 flex justify-center w-full h-full'>
                <Image
                className="w-full h-full   "
                  src={card}
                  alt={`Card ${index}`}
                  placeholder='blur'
                //   blurDataURL={card}
                  width={500}
                  height={500}
                //   objectFit='cover'
                />
              </div>
            ))}
      </Slider>
    </div>
    </div>
  );
}

export default Responsive;