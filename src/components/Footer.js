import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

function Footer() {
    const date = new Date().getFullYear();
    return (
        <section>
            <Row>
                <Col md={2}>

                </Col>
                <Col md={8} >
                    Moonoz Studios ©{date}
                </Col>
            </Row>
        </section>

    )
}

export default Footer
