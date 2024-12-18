import './App.css'
import FAQSection from './components/FAQ/FAQ';
import Timeline from './components/Timeline/Timeline'
import Footer from './components/footer/footer';
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Projects from './components/projects/projects';


export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Timeline/>
      <Projects/>
      <FAQSection/>
      <Footer/>
    </>
  );
}
