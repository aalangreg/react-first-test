import React from 'react'
import { Col, Row } from 'react-bootstrap'
import InfoEcole from './InfoEcole'
import MenuFooter from './MenuFooter'

export default function Footer() {
  return (
    <div>
        <Row>
            <Col xs={8} className="border border-dark p-2">
                <MenuFooter />
            </Col>
            <Col xs={4} className="border border-dark p-2">
                <InfoEcole />
            </Col>
        </Row>
    </div>
  )
}
