import React from 'react'
import SideMenu from './SideMenu'
import { Col, Container, Row } from "react-bootstrap"
import "../style/job.scss"
import data from "../data/jobs.json"

const jobInfo = data.map((data, key) => {
    return (
        <Col sm={6}>
            <SideMenu key={key} jobTitle={data.jobTitle} loc={data.location} description={data.desc} />
        </Col>
    )
}

)

function Jobs() {
    return (
        <section id="Jobs">
            <Row>
                <Col sm={2}></Col>
                <Col sm={10}>
                    <h1 className="section-title">
                        Apply Now
                    </h1>
                </Col>
            </Row>
           
                <Row >
                    <Col sm={2}></Col>
                    <Col>
                        <Row>
                            {jobInfo}
                        </Row>
                    </Col>
                    <Col sm={2}></Col>
                </Row>

            {/* <SideMenu jobTitle="front end developer" /> */}

        </section>

    )
}

export default Jobs
