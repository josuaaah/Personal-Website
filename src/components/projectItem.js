import * as React from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ProjectItem = ({ project }) => {
  var myButtons = project.buttons.map(button => 
    <Button
      className="m-1"
      href={button.url}
      variant="outline-dark" 
      target="_blank">
      {button.name}
    </Button>
  );

  return (
    <Card className="shadow-sm" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={project.image} />
      <Card.Body>
        <h5><strong>{project.title}</strong></h5>
        <p>{project.description}</p>
        {myButtons}
      </Card.Body>
  </Card>
  )
}

export default ProjectItem