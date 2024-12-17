
import './App.css'
import FAQSection from './components/FAQ/FAQ';
import Timeline from './components/Timeline/Timeline'
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import RegisterButton from "./components/registerButton/registerButton";


export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <RegisterButton/>
      <Timeline/>
      <FAQSection />
    </>
  );
}
