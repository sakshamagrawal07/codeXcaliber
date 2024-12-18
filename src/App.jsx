import './App.css'
import Timeline from './components/Timeline/Timeline'
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Carousel from "./components/Carousel/Carousel";


export default function App() {
  return (
    <div className='w-screen'>
      <Navbar/>
      <Hero/>
      <Timeline/>
      <div className='p-4'>
        <Carousel/>
      </div>
    </div>
  );
}
