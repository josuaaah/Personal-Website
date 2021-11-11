import * as React from 'react'

import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

const WorkItem = ({ logo, title, subtitle, description }) => {
  return (
    <Row className="m-3">
        <Col md="2">
          <Image src={logo} width="100%" roundedCircle></Image>
        </Col>
        <Col md="10">
          <h5><strong>{title}</strong></h5>
          <h6><em>{subtitle}</em></h6>
          <p>{description}</p>
        </Col>
    </Row>
  )
}

export default WorkItem