
import Header from '../components/sections/Header.jsx';
import AboutMe from '../components/sections/AboutMe.jsx';
import Clients from '../components/sections/Clients.jsx';
import ContactMe from '../components/sections/ContactMe.jsx';
import Diet from '../components/sections/Diet.jsx';



export default function Home() {
  return (
    <main className="snap-mandatory snap-y  h-[100dvh] md:h-[100vh] overflow-y-scroll" >
      
      <Header/>
      <AboutMe/>
      <Diet/>
      <Clients/>
      <ContactMe/>

    </main>
  );
}
