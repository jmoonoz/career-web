import React from 'react'
import { Col, Row } from 'react-bootstrap'
import teamData from "../data/team_members.json"
// this is where the data is drawn from
// for the mock up i just hardcoded into a json file
import "../style/team.scss"


function Team() {
    // will map out the data form the team file
    const team = teamData.map((data, key) => {
        return (

            <div className="grid-item team-member" key={key}  >
                <img role="team memver profile picture" className="team-headshot" src={data.headshot} alt="team member profile picture" />
                <h6 className="team-name">
                    {data.name}
                </h6>
                <div className="team-title">
                    {data.title}
                </div>

            </div>
        )
    })
    return (
        <section id="Team" >
            <Row>
                <Col md={2}></Col>
                <Col md={10}>
                    <h1 className="section-title">
                        The Team
                    </h1>
                </Col>
            </Row>
            <Row >
            <Col sm={2}></Col>
                <Col sm={8}>
                    <div className="grid-container">
                        {team}
                    </div>
                </Col>
                {/* <Col sm={1}></Col> */}
            </Row>
        </section>

    )
}

export default Team
