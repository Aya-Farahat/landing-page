
import { Container, Nav, Navbar } from 'react-bootstrap'
import './navs.css'
// @ts-ignore
import logo from './../../assets/logo.png';
import { useState } from 'react';


function Navs() {
 
  const [expanded, setExpanded] = useState(false); // حالة للتحكم بظهور القائمة


  return (
   <Navbar id="top" expand="lg" expanded={expanded} onToggle={setExpanded}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)} // تبديل حالة القائمة عند الضغط على الزر
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link href="#aboutus" onClick={() => setExpanded(false)}>About us</Nav.Link>
            <Nav.Link href="#explore-foods" onClick={() => setExpanded(false)}>Explore Foods</Nav.Link>
            <Nav.Link href="#review" onClick={() => setExpanded(false)}>Review</Nav.Link>
            <Nav.Link href="#faq" onClick={() => setExpanded(false)}>FAQ</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link id="btn">+96650000000</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navs