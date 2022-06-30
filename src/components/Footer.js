import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
    const date = new Date().getFullYear();
    return (
        <section>
            <Row>
                <Col md={2}>

                </Col>
                <Col className="footer-content link-detail" md={8} >
                <a href="#Hero">
                    Moonoz Studios ©{date}
                </a>
                </Col>
                <Col md={2}>

                </Col>
            </Row>
        </section>

    )
}

export default Footer
