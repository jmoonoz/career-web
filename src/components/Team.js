import React from 'react'
import { Col, Row } from 'react-bootstrap'
import teamData from "../data/team_members.json"
import "../style/team.scss"


function Team() {
    const team = teamData.map((data, key) => {
        return (

            <Col className="team-member" key={key} xs={6} md={2} >
                <img className="team-headshot" src={data.headshot} />
                <h6 className="team-name">
                    {data.name}
                </h6>
                <div className="team-title">
                    {data.title}
                </div>

            </Col>
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
            <Row className="section-margin">
                {team}
            </Row>
        </section>

    )
}

export default Team
