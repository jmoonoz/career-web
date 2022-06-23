import React from 'react'
import { Container, Col, Button, Row } from 'react-bootstrap'
import '../style/Hero.scss';
import Typewriter from "typewriter-effect"

function Hero() {
    return (
        <section id="Hero" className="hero-banner background-tint">
            {/* <h1>this is the hero section</h1> */}
            <Container className="hero-column-content" >
                <iframe src='https://my.spline.design/moonozstudioscopy-d21b71dcc6121641de70cbe065d2d50f/' className="moonoz-3d" frameborder='0' width='100%' height='100%'></iframe>
                <Typewriter
                    className="hero-career-text"
                    onInit={(typewriter) => {
                        typewriter.pauseFor(1000)
                            .typeString("We know where we were yesterday")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("Lets see where we can go tomorrow")
                            .pauseFor(1000)
                            .deleteAll()
                            .start()
                    }}
                    options={{
                        loop: true
                    }}
                />
                <Button variant="light" href="#About">
                    Learn More
                </Button>

            </Container>
        </section>
    )
}

export default Hero
