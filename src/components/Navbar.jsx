import React,{ useState , useEffect} from 'react';
import { Link } from "react-scroll";
import '../styles/Navbar.css'
import logo from '../images/img1.png'
import TocIcon from '@mui/icons-material/Toc';
function Navbar() {
  const [openLinks , setOpenLinks] = useState(false);

  useEffect(()=>{
    let handler = () =>{
      setOpenLinks(false);
    };
    document.addEventListener("mouseup",handler);
  })
  return (
    <nav className='NavContainer'>
      <div className='NavLeftSide'>
        <img src={logo} prop=''></img>
        <h1>GODZILLA</h1>
      </div>
      <div  id={openLinks ? "open" : "close"}>
        <ul className='hiddenLinks'>
          <li><Link to='home' smooth={true} duration={1000}>Home</Link></li>
          <li><Link to='classes' smooth={true} duration={1000}>Classes</Link></li>
          <li><Link to='about' smooth={true} duration={1000}>About</Link></li>
          <li><Link to='contact' smooth={true} duration={1000}>Contact</Link></li>
        </ul>
      </div>
      <div className='NavRightSide'>
       <ul className='originLinks'>
          <li><Link to='home' smooth={true} duration={1000}>Home</Link></li>
          <li><Link to='classes' smooth={true} duration={1000}>Classes</Link></li>
          <li><Link to='about' smooth={true} duration={1000}>About</Link></li>
          <li><Link to='contact' smooth={true} duration={1000}>Contact</Link></li>
       </ul>
       <button onClick={()=>{ setOpenLinks(!openLinks)}}>
              <TocIcon/>
            </button>
      </div>
    </nav>
  )
}

export default Navbar
