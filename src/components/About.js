import React from 'react'
import { Col, Row } from 'react-bootstrap'


function About() {
    return (
        <section id="About">
            <Row>
                <Col md={2}>
                </Col>
                <Col  sm={12} md={10}>
                    <h1 className="section-title">
                        Qvin
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                </Col>
                <Col className="section-title" sm={12} md={5}>
                    <p>
                        lorin epsim
                    </p>
                </Col>
                <Col sm={12} md={5}>
                    3d model
                </Col>
            </Row>
        </section>

    )
}

export default About
