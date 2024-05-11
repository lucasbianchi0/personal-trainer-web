'use client'
import  { useState } from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import Image from 'next/image'
// import logo from '../../../public/images/LOGO.png'

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,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'

export default function NavbarBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    
    { title: "SOBRE MI", url: "sobre-mi" },
    { title: "RECETARIO", url: "recetario" },
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
      onMenuOpenChange={setIsMenuOpen} disableAnimation  maxWidth="full"  className={` w-full border-none mx-auto justify-between z-50 bg-transparent fixed top-0 h-[58px]  lg:min-h-[60px] lg:px-10 ${isMenuOpen? 'bg-gray-500':''} `} >
      
      <NavbarBrand className="h-full max-h-[47%] max-w-[100px]" onClick={()=>handleMoveToSection('inicio')}  >
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
          <NavbarMenuItem onClick={()=> handleMoveToSection(menuItem.url)} key={`${menuItem.title}-${index}`} className="flex lg:mx-auto">
            <p  className="text-white montserrat flex w-full  text-sm italic ">
              {menuItem.title}
            </p>
          </NavbarMenuItem>
        ))}
      </NavbarContent>

      <button onClick={()=>handleMoveToSection('contact')} radius="none" color="default" variant="bordered" className="hidden montserrat font-extrabold lg:italic lg:block text-white border border-white py-1 px-8 text-md transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-none text-sm"    >
          ASESORIA
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
        <p onClick={()=>handleMoveToSection('contact')} className="mt-1 w-full text-lg  text-white montserrat font-black">ASESORIA</p>
      </NavbarMenu>
    </Navbar>
  );
}
