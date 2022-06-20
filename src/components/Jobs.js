import React from 'react'
import SideMenu from './SideMenu'
import { Col, Container, Row } from "react-bootstrap"
import "../style/job.css"
import data from "../data/jobs.json"

const jobInfo = data.map((data, key) => {
    return (
        <Col sm={6}>
            <SideMenu key={key} jobTitle={data.jobTitle} description={data.desc} />
        </Col>
    )
}

)

function Jobs() {
    return (
        <section id="Jobs">
            <h1>this is the job section</h1>
            <h1>Apply Now</h1>
            <Container>
                <Row>
                    {jobInfo}
                </Row>
            </Container>

            {/* <SideMenu jobTitle="front end developer" /> */}

        </section>

    )
}

export default Jobs
