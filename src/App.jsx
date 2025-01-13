import './App.css'
import FAQSection from './components/FAQ/FAQ2';
import Timeline from './components/Timeline/Timeline'
import Footer from './components/footer/footer';
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Carousel from "./components/Carousel/Carousel";
import Projects from './components/projects/projects';
import AboutUs from './components/aboutus/aboutus';
import CarouselReplacement from './components/Carousel/CarouselReplacement';
import TeamPage from './components/team/TeamPage';
import Developers from './components/team/Team';
import { Route, Routes } from 'react-router-dom';
import DeveloperPage from './pages/Team';
import Home from './pages/Home';

export default function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<DeveloperPage />} />
    </Routes>
    // <div className='w-screen'>
    //   <Navbar/>
    //   <Hero/>
    //   <AboutUs/>
    //   <Timeline/>

    //   <div className='p-12'>
    //     {/* <Carousel/> */}
    //     <CarouselReplacement/>
    //   </div>
    

    //   <Projects/>
    //   <FAQSection/>
    //   <Developers />
    //   <Footer/>
    // </div>

  );
}
