import React from 'react'
import './header.css'


function Header() {
  return (
    <header id="home" >
    <div className='container '  >
      <div className="row" >
    {/** الجزء الي على اليسار  */ }
    <div className='col-md-6'>
        <h2>Good food choices are good investments.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
        <button>Order Now </button>
        <button >learn more <span>{ "⨠ "}</span></button>
    </div>


   {/** الجزء الي على االيمين  */ }
    <div className='col-md-6'>
      
    </div>
    </div>
    </div>
    <div id="about-us"></div>
    </header>
  )
}

export default Header