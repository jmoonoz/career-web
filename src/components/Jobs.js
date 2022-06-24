import React, {useState, useEffect} from 'react'
import SideMenu from './SideMenu'
import { Col, Row } from "react-bootstrap"
import "../style/job.scss"
// this is where the data is drawn from
// for the mock up i just hardcoded into a json file
// import data from "../data/jobs.json"


function Jobs() {

    const [data,setData]=useState([]);
    const getData=()=>{
      fetch('http://localhost:3000/db/jobs.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[])
    
    // map out data from the jobs file
    const jobInfo = data.map((data, key) => {
        return (
            <Col key={key} sm={6}>
                <SideMenu  jobTitle={data.jobTitle} loc={data.location} description={data.desc} />
            </Col>
        )
    }
    
    )
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
        </section>

    )
}

export default Jobs
