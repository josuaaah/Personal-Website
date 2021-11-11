import * as React from 'react'

import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Layout from '../components/layout'
import MstfLogo from '../images/mstf.png'
import MyPhoto from '../images/joshua.png'
import Row from 'react-bootstrap/Row'
import firstInternLogo from '../images/3e_accounting.png'

const WorkPage = () => {
  return (
    <Layout pageTitle="Work Experience">
      <h4>Software Engineering</h4>
      <Row className="m-3">
        <Col md="2">
          <Image src={firstInternLogo} width="100%" roundedCircle></Image>
        </Col>
        <Col md="10">
          <h5><strong>Intern (Software Developer)</strong></h5>
          <h6><em>May 2021 - Jul 2021, Singapore</em></h6>
          <p>
            I contributed to the full-stack development of a Human Resource Management System (HRMS), 
            using web development  technologies like AngularJS, Django and MySQL. After improving the 
            visual display of notifications and uploaded attachments, I developed a new module to let 
            employees digitally clock their work timings.
          </p>
        </Col>
      </Row>

      <h4>National Service</h4>
      <Row className="m-3">
        <Col md="2">
          <Image src={MstfLogo} width="100%" roundedCircle></Image>
        </Col>
        <Col md="10">
          <h5><strong>Intelligence Research Assistant</strong></h5>
          <h6><em>Apr 2017 - Dec 2019, Singapore</em></h6>
          <p>
            I maintained large data archives with Microsoft Excel and operate maritime data analysis 
            software on a daily basis. Using the findings of unsupervised machine learning software, 
            I conducted open-source research on various global news developments, and assisted in the 
            writing of reports on maritime happenings.
          </p>
        </Col>
      </Row>
    </Layout>
  )
}

export default WorkPage