import * as React from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import TechStack from './techStack'

const ProjectItem = ({ project }) => {
  return (
    <Card className="my-1 shadow-lg" style={{ height: '27rem', width: '20rem'}}>
      <Card.Img className="shadow-sm" src={project.image} style={{ height: '12rem', objectFit: 'cover' }} />
      <Card.Body>
        <h5><strong>{project.title}</strong></h5>
        <div>{project.description}</div>
        <TechStack techs={project.techs}></TechStack>
      </Card.Body>
      <Card.Footer>
        {project.buttons.map(button => 
            <Button variant="outline-dark" href={button.url} style={{ marginRight: '7px' }} target="_blank">
              {button.name}
            </Button>)}
      </Card.Footer>
    </Card>
  )
}

export default ProjectItem