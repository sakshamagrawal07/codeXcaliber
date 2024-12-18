import './App.css'
import Timeline from './components/Timeline/Timeline'
import Footer from './components/footer/footer';
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";


export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Timeline/>
      <Footer/>
    </>
  );
}
