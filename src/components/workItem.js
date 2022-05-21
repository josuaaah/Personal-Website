import * as React from 'react'

import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

const WorkItem = ({ work }) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent style={{ flex: 0.1 }} sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
        {work.period}
      </TimelineOppositeContent>
      
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot></TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Row className="m-1">
          <Col md="2">
            <Image src={work.logo} width="100%" rounded></Image>
          </Col>
          <Col md="10">
            <h5><strong>{work.position}</strong></h5>
            <h6>{work.company}</h6>
            <p>{work.description}</p>
          </Col>
        </Row>
      </TimelineContent>  
    </TimelineItem>
  )
}

export default WorkItem