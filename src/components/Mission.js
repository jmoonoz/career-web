import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import Typewriter from "typewriter-effect"
import "../style/mission.scss"

function Mission() {
    const leftBracket = "[";
    const rightBracket = "]";
    return (
        <section id="Mission">
            <Row>
                <Col md={2}>

                </Col>
                <Col md={10}>
                    <h1 className="section-title">
                        Mooñoz {leftBracket}
                        <Typewriter
                            className="type-text"
                            onInit={(typewriter) => {
                                typewriter.typeString(" moon-yoos")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .start();
                            }}
                            options={{
                                loop: true
                            }}
                        />
                        {rightBracket}
                    </h1>

                </Col>
                <Col md={2}></Col>
                <Col md={8}>
                    <p className="paragraph-text" >
                        we are here to user in a new era of design.
                    </p>
                </Col>
                <Col md={2} ></Col>
            </Row>




        </section>
    )
}

export default Mission
