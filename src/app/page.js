'use client'
import {Button} from '@nextui-org/button'; 
import NavbarBar from './components/Navbar.jsx';
import Header from './sections/Header.jsx';
import Otro from './components/Otro.jsx';
import Column from './components/Column.jsx';
import AboutMe from './sections/AboutMe.jsx';
import Clients from './sections/Clients.jsx';
import ContactMe from './sections/ContactMe.jsx';


import Diet from './sections/Diet.jsx';
import Slidertest from './components/Slidertest.jsx';



export default function Home() {
  return (
    <main >
      <Column/>

      <NavbarBar/>
      <div className="snap-mandatory snap-y  h-[100vh] overflow-y-scroll">
        <Header/>
        {/* <Column/> */}
        <AboutMe/>
        <Diet/>
        <Clients/>
        <ContactMe/>
        {/* <Otro/> */}
        {/* <Otro/> */}
        {/* <Slidertest/> */}
      </div>
    
    </main>
  );
}
