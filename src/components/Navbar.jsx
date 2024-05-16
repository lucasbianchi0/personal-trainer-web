'use client'
import  { useState } from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import Image from 'next/image'
// import logo from '../../../public/images/LOGO.png'


export default function NavbarBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    
    { title: "SOBRE MÍ", url: "sobre-mi" },
    { title: "ALIMENTACIÓN", url: "alimentacion" },
    { title: "CLIENTES", url: "clientes" },
  ];
  
  const handleMoveToSection = (url) => {
    console.log(url);
    const section = document.getElementById(url);
    if (window.innerWidth < 700) {
        setIsMenuOpen(!isMenuOpen);
    }
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    if (url === section.id) {
        console.log('sape lokita');
    }
    
  };

  return (
    <Navbar isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen} disableAnimation  maxWidth="full"  className={` w-full border-none mx-auto justify-between z-50 bg-transparent fixed top-0 h-[3.625rem]  lg:min-h-[3.75rem] lg:px-10 ${isMenuOpen? 'bg-gray-500':''} `} >
      
      <NavbarBrand className="h-full max-h-[47%] max-w-[6.25rem]" onClick={()=>handleMoveToSection('inicio')}  >
        <Image
        className="h-full max-h-full w-auto cursor-pointer "
        src='/images/LOGOFER.png'
        // placeholder="blur"
        // blurDataURL={PLACEHOLDER_IMAGE}
        width={300}
        height={300}
        alt="Picture of the author"
        />

      </NavbarBrand>
      <NavbarContent className="hidden lg:flex  lg:max-w-[50%] lg:justify-center lg:items-center lg:mx-auto   " >
        {menuItems.map((menuItem, index) => (
          <NavbarMenuItem onClick={() => handleMoveToSection(menuItem.url)} key={`${menuItem.title}-${index}`} className="flex lg:mx-auto relative cursor-pointer">
            <p className="text-white montserrat flex w-full text-sm italic relative subrayado">
              {menuItem.title}
              {/* <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white origin-left transform scale-x-0 transition-transform duration-3000 group-hover:scale-x-100" /> */}
            </p>
          </NavbarMenuItem>
        ))}
    </NavbarContent>

      <button onClick={()=>handleMoveToSection('contact')} radius="none" color="default" variant="bordered" className="hidden montserrat font-extrabold lg:italic lg:block text-white border border-white py-1 px-8 text-md transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-none text-sm"    >
          ASESORÍA
      </button> 


      {/* mobile */}


      

      <NavbarMenuToggle className=" lg:hidden text-white " aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      <NavbarMenu className="bg-zinc-800 pt-8 absolute top-10 left-0 bottom-0 h-full">
        {menuItems.map((menuItem, index) => (
          <NavbarMenuItem key={`${menuItem.title}-${index}`} className="flex flex-col">
            <p 
                onClick={()=>handleMoveToSection(menuItem.url)}
              
              className="w-full text-white montserrat mt-1 "
              size="lg"
              >
                {menuItem.title}
              </p>
          </NavbarMenuItem>
        ))}
        <p onClick={()=>handleMoveToSection('contact')} className="mt-1 w-full text-lg  text-white montserrat font-black">ASESORÍA</p>
      </NavbarMenu>
    </Navbar>
  );
}
