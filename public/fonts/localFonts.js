// import localFont from './Colus-Regular.woffl'

// export const myFont = localFont({ src: './Colus-Regular.woff2' })


export const myFont = localFont({
    src: [
      {
        path: '../../public/fonts/Colus-Regular.woff',
        weight: '400'
      },
    ],
    // variable: '--font-poppins'
  })