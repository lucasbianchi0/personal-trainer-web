"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// NO HAY QUE MODIFICAR NADA ACA
const Column = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full z-10 mb-[-11%] 2xl:mb-[-12%]">
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          className="w-full h-auto"
          alt="Column"
          src={
            isMobile
              ? "/images/columnaMobile.png"
              : "/images/columnaDesktop.png"
          }
          height={100}
          width={500}
        />
      </motion.div>
    </div>
  );
};

export default Column;
