// import React from 'react'
// import column from '../../../public/images/column.png'
// import Image from "next/image";


// const Column = () => {
//   return (
//     // <div className='w-[100%] relative top-10 '>
//         <Image
        
//                 className='w-[100%] h-auto bottom-[-60px]  absolute lg:bottom-[-150px] left-0   '

//                 alt='min-h-screen'
//                 src={column}
//                 placeholder="blur"
                
//                 // fill
//                 height={100}
//                 width={500}
//                 // sizes="50vw"
               
//         />
//     // </div>
//   )
// }

// export default Column



import React from 'react';
// import column from '../../../public/images/column.png';
import Image from 'next/image';

const Column = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full z-10  mb-[-40px] sm:mb-[-90px]  lg:mb-[-160px]'>
      <Image
        className='w-full h-auto'
        alt='Column'
        // src={column}
        src='/images/COLUMNA.PNG'
        // placeholder='blur'
        height={100}
        width={500}
      />
    </div>
  );
};

export default Column;
