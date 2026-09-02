import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ImageCegep from './ImageCegep';
import Menu from './Menu'; 

export default function NavBar() {
  return (
     <Row className="border border-dark p-2">
            <Col xs={8} className="border border-dark p-2">
              <ImageCegep />
            </Col>   
            <Col xs={4}> 
              <Menu />
            </Col>
       </Row>
  )
}
