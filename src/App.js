import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Contenu from './components/Contenu';


function App() {

  const [sectionActive, setSectionActive] = useState('accueil');

  return (
    <div>
      <Container>
        <Row>
          <NavBar 
          changerSection={setSectionActive}/>
       </Row>
      
        <Row>
            <Col className="border border-dark p-4">
              <Contenu 
              sectionActive={sectionActive}
/>
            </Col>   
        </Row>

        <Row>                   
            <Col xs={8} className="border border-dark p-4">
              <h3>menu</h3>
            </Col>
            <Col xs={4} className="border border-dark p-4">
              <Footer />
            </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App; 
