import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import moonozStudios from "../image/moonozStudioLogo.png"



function About() {
    return (
        <section id="About">
            <Row>
                <Col md={2}>
                </Col>
                <Col sm={12} lg={10}>
                    <h1 className="section-title">
                        About
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                </Col>
                <Col sm={12} lg={5}>
                    <p className="paragraph-text">
                        We thrive ourselves with the pleasure of knowing the joy our digital work brings Billions across the world. Working with top names like Disney®, Pixar®, Lucas Films®, A24 ® and many more. We look to continue our passion of creating digital art for generations to come.
                    </p>
                    <p className="paragraph-text">
                        No one person can do every thing, but a team can do anything. At Moonoz Studios, you will move forward into the future of digital art and establish yourself as a renown Designer, Leader and overall creative artist.
                    </p>
                </Col>
                {/* 3d model to be displayed in about*/}
                <Col sm={12} lg={4}>
                    <div className="retro-logo">
                        <Image   className="retro-moonoz" src={moonozStudios} atl="moonoz Studios retro letters" />
                    </div>
                </Col>
                <Col lg={1}>
                </Col>
            </Row>
        </section>

    )
}

export default About
