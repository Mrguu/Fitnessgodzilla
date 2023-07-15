import React from 'react'
import homebackground from '../images/homebackground.jpg'
import '../styles/Home.css'
import { Link } from 'react-scroll'
function Home() {
  return (
    <div className='homeContainer' id='home' style={{backgroundImage: `url(${homebackground})`}}>
      <h2>
        IT'S ALL ABOUT WHAT YOU CAN ACHIEVE
      </h2>
      <p>
        Empower yourself to make the changes you need to make
      </p>
       <Link to='classes' smooth={true} duration={1000}>
        <button>
          LET'S GET STARTED
        </button>
       </Link>
    </div>
  )
}

export default Home
