'use client'
import React from "react";
// import {Link} from 'react-scroll';
// import { Link as ScrollLink } from "react-scroll"
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem,Link, Button} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import Image from 'next/image'
import logo from '../../../public/images/LOGO.png'
// import Link from "next/link";
export default function NavbarBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "INICIO",
    "SOBRE MI",
    "RECETARIO",
    "PLANES",
    "COMBOS",
  ];

  return (
    <Navbar isMenuOpen={isMenuOpen}
    onMenuOpenChange={setIsMenuOpen} disableAnimation isBordered maxWidth="full"  className=" w-full  mx-auto justify-between z-50 bg-transparent fixed top-0 lg:min-h-[80px] lg:px-10" >
        
        <NavbarBrand className="h-full max-h-[70%] w-auto "  >
        <Image
        className="h-full max-h-full w-auto cursor-pointer "
        src={logo}
        width={500}
        height={500}
        alt="Picture of the author"
        />

        </NavbarBrand>
        {/* <li>
        <a href='#clients'  smooth  > sape
        </a>
        </li> */}

      <NavbarContent className="hidden sm:flex gap-4 w-full justify-between" >
{/*         
        <Link href="#clients" scroll={false} > sape
        </Link> */}
        {/* <li>
        <ScrollLink activeClass="active" to="clients" spy={true} smooth={true} offset={50} duration={500}  > sape
        </ScrollLink>
        </li>
         */}
      {/*  */}
      {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="flex gap-10">
            <Link
              to="clients"
              spy={true}
              smooth={true}  duration={300}
              className="text-white montserrat flex w-full"
            // size="xl"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarContent>

        <Button radius="none" color="default" variant="bordered" className="hidden montserrat font-extrabold lg:italic lg:block text-white border border-white py-2 px-10 text-md transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-none"    >
            ASESORIA
        </Button> 


      


        {/* mobile */}


        <NavbarMenuToggle  className="sm:hidden text-white" aria-label={isMenuOpen ? "Close menu" : "Open menu"} />

      <NavbarMenu className="bg-zinc-800 pt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className=" flex flex-col gap-">

            {/* <Link
            spy={true}
            to="#clients" smooth={true} offset={50} duration={500}
            className="w-full text-white montserrat "
            size="lg"
            >
              {item}
            </Link> */}
          </NavbarMenuItem>
        ))}
        <p className="w-full text-white montserrat font-black " >ASESORIA</p>
      </NavbarMenu>
    </Navbar>
  );
}
