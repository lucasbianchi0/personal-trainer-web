/** @type {import('tailwindcss').Config} */

// export const montserrat = Montserrat({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   // display:'swap',
//   // fallback: ['Arial', 'sans-serif'],
// });

import {nextui} from "@nextui-org/react";

const config = {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // fontFamlily:{
      //   sans:["var(--font-colus)"],
      //   mont:["var(--font-montserrat)"],

      //   // mont:["var(--font-montser)",...montserrat.sans],

      // }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};

export default config;