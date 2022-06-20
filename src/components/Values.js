import React from 'react'
import { Col, Row } from 'react-bootstrap'
// reads data from a json file
import data from "../data/values.json"

function Values() {
    // function that maps through Json file and creates columns 
    // that will formate in side depending on screen
    const value = data.map((data, key) => {
        return (
            <Col key={key} md={2}>
                <h4>
                    {data.valueTitle}
                </h4>
                <p>
                    {data.valueDescription}
                </p>
            </Col>
        )
    })

    return (
        <section id='Values' >
        <Row>
            <Col md={2}></Col>
            <Col md={10}>
                <h1 className="section-title">Value</h1>
            </Col>
        </Row>
        
            <Row>
                <Col md={2}>
                </Col>
                {value}
                <Col md={2}>
                </Col>

            </Row>
        </section>

    )
}

export default Values
