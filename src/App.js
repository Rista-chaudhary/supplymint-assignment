import './App.css';
import Clients from './components/Clients';
import Features from './components/Features';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Clients/>
      <Features/>
    </div>
  );
}

export default App;
