import React from 'react'
import { Container, Col, Button, Row } from 'react-bootstrap'
import '../style/Hero.css';
import Typewriter from "typewriter-effect"

function Hero() {
    return (
        <section id="Hero" className="hero-banner background-tint">
            {/* <h1>this is the hero section</h1> */}
            <Container >
                <Row className="hero-content" >
                {/* left section of header */}
                    <Col sm={6}>
                        <Col sm={12}>
                            <h1>Moonoz Studios</h1>
                        </Col>
                        <Col sm={12}>
                            <Typewriter
                                className="hero-career-text"
                                onInit={(typewriter) => {
                                    typewriter.typeString("UI/UX Design")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Graphic Design")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Animation")
                                        .start()
                                }}
                                options={{
                                    loop: true
                                }}
                            />
                        </Col>
                        <Button>
                            Learn More
                        </Button>
                    </Col>
                    {/* right section of header */}
                    <Col sm={6}>
                        <h2>3d design</h2>

                    </Col>
                    {/* <div className='hero-fadeBottom'></div> */}
                </Row>
            </Container>
        </section>
    )
}

export default Hero
