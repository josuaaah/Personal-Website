import * as React from 'react'

import Card from 'react-bootstrap/Card'

const ProjectItem = ({ project, children }) => {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={project.image} />
      <Card.Body>
        <h5><strong>{project.title}</strong></h5>
        <p>{project.description}</p>
        {children}
      </Card.Body>
  </Card>
  )
}

export default ProjectItem