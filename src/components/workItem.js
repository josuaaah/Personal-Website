import * as React from 'react'

import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

const WorkItem = ({ work }) => {
  return (
    <Row className="m-3">
        <Col md="2">
          <Image src={work.logo} width="100%" thumbnail></Image>
        </Col>
        <Col md="10">
          <h5><strong>{work.title}</strong></h5>
          <h6><em>{work.subtitle}</em></h6>
          <p>{work.description}</p>
        </Col>
    </Row>
  )
}

export default WorkItem