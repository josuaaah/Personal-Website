import * as React from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ProjectItem = ({ project }) => {
  return (
    <Card className="shadow-lg" style={{ height: '28rem', width: '20rem'}}>
      <Card.Img src={project.image} />
      <Card.Body>
        <h5><strong>{project.title}</strong></h5>
        <div>{project.description}</div>
      </Card.Body>
      <Card.Footer>
        {project.buttons.map(button => 
            <Button href={button.url} className="m-1" variant="outline-dark" target="_blank">
              {button.name}
            </Button>)}
      </Card.Footer>
    </Card>
  )
}

export default ProjectItem