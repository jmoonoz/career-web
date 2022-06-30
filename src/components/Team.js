import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
// this is where the data is drawn from
// for the mock up i just hardcoded into a json file
import "../style/team.scss"


function Team() {
    const [data,setData]=useState([]);
    // const url = "https://careerwebpage.herokuapp.com"


// gathered data from server
//files are stored locally, just used localhost to pull data
    const getData=()=>{
      fetch('https://careerwebpage.herokuapp.com/db/team_members.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      
      )
        .then(function(response){
        //   console.log(response)
          return response.json();
        })
        .then(function(myJson) {
        //   console.log(myJson);
          setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[])


    // will map out the data form the team file
    const team = data.map((data, key) => {
        return (

            <div className="grid-item team-member" key={key}  >
                <img className="team-headshot" src={data.headshot} aria-label="team member faceshot"/>
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
