import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

function Footerx() {
  return (
    <div className='foots'>
    <Navbar  className="justify-content-center flex-column">
    <Nav className="mb-2 ">
        <Nav.Link href="#" >Register</Nav.Link>
        <Nav.Link href="#">Forum</Nav.Link>
        <Nav.Link href="#">Affiliate</Nav.Link>
        <Nav.Link href="#">FAQ</Nav.Link>
    </Nav>
    <div className="social-icons">
        <a href="#" className="social-icon" > <FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"  className="social-icon"> <FontAwesomeIcon icon={faYoutube} /></a>
        <a href="#"  className="social-icon"><FontAwesomeIcon icon={faLinkedin} /> </a>
        <a href="#" className="social-icon" > <FontAwesomeIcon icon={faInstagram} /> </a>
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
    </div>
    <Navbar.Text className="mt-3" >
        © 2025. Created by Aya Al-Akizi.
    </Navbar.Text>
</Navbar>
</div>
  )
}

export default Footerx