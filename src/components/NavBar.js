import React from 'react'
import { Navbar, 
        Container, 
        Nav } from 'react-bootstrap'
import ImageCegep from './ImageCegep'

export default function NavBar({ changerSection }) {
  return (
      <Navbar bg = "light" variant = "light" expand = "lg" className="border border-dark p-2">

      <Container>

      <img src={ImageCegep} 
        width="75"
        height="auto"
        className="d-inline-block align-top"
        alt="Logo"/>

      <Nav className="ml-auto">

          <Nav.Link href="#accueil" onClick={() => changerSection('accueil')}>Accueil</Nav.Link>
          
          <Nav.Link href="#a-propos" onClick={() => changerSection('a-propos')}>À propos</Nav.Link>
          
          <Nav.Link href="#formation" onClick={() => changerSection('formation')}>Formation</Nav.Link>
          
          <Nav.Link href="#contact" onClick={() => changerSection('contact')}>Contact</Nav.Link>
      </Nav>

      </Container>

    </Navbar>
  )
}
