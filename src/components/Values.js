import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "../style/value.scss"
// this is where the data is drawn from
// for the mock up i just hardcoded into a json file
import data from "../data/values.json"

function Values() {
    // function that maps through Json file and creates columns 
    // that will formate in side depending on screen
    const value = data.map((data, key) => {
        return (
            <Col key={key} lg={2}>
                <h3>
                    {data.valueTitle}
                </h3>
                <div className="paragraph-text">
                    {data.valueDescription}
                </div>
            </Col>
        )
    })

    return (
        <section id='Values' >
            <Row>
                <Col lg={2}></Col>
                <Col lg={10}>
                    <h1 className="section-title">Values we work with</h1>
                </Col>
            </Row>

            <Row>
                <Col sm={2} lg={2}>
                </Col>
                {/*post results */}
                {value}
                <Col lg={2}>
                </Col>

            </Row>
        </section>

    )
}

export default Values
