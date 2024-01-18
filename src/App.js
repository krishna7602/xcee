
import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar';
import About from './components/About.js';
import Speakers from './components/Speakers.js';
import Tickets from './components/Tickets.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Speakers/>
    <Tickets/>
    <Footer/>
    </>
  );
}

export default App;
