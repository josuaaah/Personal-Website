import * as React from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import TechStack from './techStack'

const ProjectItem = ({ project }) => {
  return (
    <Card className="shadow-lg" style={{ height: '30rem', width: '20rem'}}>
      <Card.Img src={project.image} style={{ height: '13rem', objectFit: 'cover' }} />
      <Card.Body>
        <h5><strong>{project.title}</strong></h5>
        <div>{project.description}</div>
        <TechStack techs={project.techs}></TechStack>
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