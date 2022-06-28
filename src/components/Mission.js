import React from 'react'
import { Col, Row } from 'react-bootstrap';
// import Typewriter from "typewriter-effect"
import "../style/mission.scss"

function Mission() {
    // brackets for name pronunciation 
    const leftBracket = "[";
    const rightBracket = "]";
    return (
        <section id="Mission">
            <Row>
                <Col md={2}>

                </Col>
                <Col md={10}>
                    <h1 className="section-title">
                        Mooñoz Studios 
                        <br className="break"/>
                        {/* {leftBracket} */}
                        {/* <Typewriter
                            className="type-text"
                            onInit={(typewriter) => {
                                typewriter.typeString(" moon-yoos Stoo-De-OOs")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .start();
                            }}
                            options={{
                                loop: true
                            }}
                        /> */}
                        {/* {rightBracket} */}
                    </h1>

                </Col>
                <Col md={2}></Col>
                <Col md={8}>
                    <p className="paragraph-text" >
                    Our mission is to continue captivating the amazement of billions through our cutting edge digital art. To dig deep into our curiosity and convert pixels into real life. We know where we were yesterday, now let’s see where we can go tomorrow.
                    </p>
                </Col>
                <Col md={2} ></Col>
            </Row>
        </section>
    )
}

export default Mission
