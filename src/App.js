import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Classes from './pages/Classes';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footerr'
function App() {
  return (
    <div className='MainContainer'>
          <Navbar/>
          <Home/>
          <Classes/>
          <About />
          <Contact/>
          <Footer/>
    </div>
  );
}

export default App;
