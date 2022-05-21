import * as React from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ProjectItem = ({ project }) => {
  return (
    <Card className="shadow-lg" style={{ width: '20rem'}}>
      <Card.Img src={project.image} />
      <Card.Body>
        <h5><strong>{project.title}</strong></h5>
        <p>{project.description}</p>
        {project.buttons.map(button => 
          <Button href={button.url} className="m-1" variant="outline-dark" target="_blank">
            {button.name}
          </Button>)}
      </Card.Body>
    </Card>
  )
}

export default ProjectItem