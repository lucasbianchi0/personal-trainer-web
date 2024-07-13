"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

export default function NavbarBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState('');

  // MODIFICACION DE RUTAS, LA URL DEJARLA SIEMPRE MODIFCAR UNICAMENTE EL TITLE
  const menuItems = [
    { title: "SOBRE MÍ", url: "sobre-mi" },
    { title: "ALIMENTACIÓN", url: "alimentacion" },
    { title: "CLIENTES", url: "clientes" },
  ];

  const handleMoveToSection = (url) => {
    setIsActive(url+"-B")
    const section = document.getElementById(url);
    if (window.innerWidth < 700) {
      setIsMenuOpen(!isMenuOpen);
    }
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    // if (url === section.id) {
    //   console.log(url+"-B");
    // }
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      disableAnimation
      maxWidth="full"
      className={` w-full border-none mx-auto justify-between z-50 fixed top-0 left-0 h-[3.625rem]  lg:min-h-[3.75rem] lg:px-10 ${
        isMenuOpen ? "bg-black" : "bg-transparent"
      } `}
    >
      <NavbarBrand
        className="h-full max-h-[47%] max-w-[6.25rem]"
        id="inicioB"
        onClick={() => handleMoveToSection("inicio")}
      >
        {/* IMAGEN DE LOGO */}
        <Image
          className="h-full max-h-full w-auto cursor-pointer "
          src="/images/LOGOFER copy.png"
          width={300}
          height={300}
          alt="Picture of the author"
        />
      </NavbarBrand>
      <NavbarContent className="hidden lg:flex  lg:max-w-[50%] lg:justify-center lg:items-center lg:mx-auto   ">
        {menuItems.map((menuItem, index) => (
          <NavbarMenuItem
            onClick={() => handleMoveToSection(menuItem.url)}
            key={`${menuItem.title}-${index}`}
            className="flex lg:mx-auto relative cursor-pointer"
          >
            <p href={`#${menuItem.url}`} className={`text-white montserrat flex w-full text-sm relative ${isActive === menuItem.url + "-B" ? "linea" : "subrayado"}`} id={`${menuItem.url}-B`}>
              {menuItem.title}
            </p>
          </NavbarMenuItem>
        ))}
      </NavbarContent>

      {/* BOTON DE ASESORIA */}
      <button
        onClick={() => handleMoveToSection("contact")}
        radius="none"
        color="default"
        variant="bordered"
        className="hidden custom font-extrabold botones lg:block  py-1 px-8 text-md transition duration-300 ease-in-out text-sm"
      >
        EMPEZA YÁ
      </button>

      {/* VERSION MOBILE */}

      <NavbarMenuToggle
        className=" lg:hidden text-[#daa520]"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      />
      <NavbarMenu className="oppa pt-8 absolute top-10 left-0 bottom-0 h-full">
        <span className="margen">
        {menuItems.map((menuItem, index) => (
          <NavbarMenuItem
            key={`${menuItem.title}-${index}`}
            className="flex flex-col"
          >
            <p
              onClick={() => handleMoveToSection(menuItem.url)}
              className="margen2 w-full text-white montserrat mt-1 "
              size="lg"
            >
              {menuItem.title}
            </p>
          </NavbarMenuItem>
        ))}
        {/* BOTON ASESORIA EN MOBILE */}
        <p
          onClick={() => handleMoveToSection("contact")}
          className="margen2 mt-1 w-full text-lg  text-white montserrat font-black"
        >
          EMPEZA YÁ
        </p>
        </span>
      </NavbarMenu>
    </Navbar>
  );
}
