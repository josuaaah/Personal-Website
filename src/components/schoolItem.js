import * as React from 'react'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

const SchoolItem = ({ module, children }) => {
  return (
    <Card className="shadow-sm m-3 p-3">
        <h5><strong>{module.title}</strong></h5>
        <p>{module.description}</p>
        <Container className="p-0">{children}</Container>
    </Card>
  )
}

export default SchoolItem