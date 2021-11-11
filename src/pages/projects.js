import * as React from 'react'

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Layout from '../components/layout'
import ProjectItem from '../components/projectItem'
import Row from 'react-bootstrap/Row'
import TheTowerImage from '../images/the_tower.png'

const theTower = {
  image: TheTowerImage,
  title: "The Tower",
  description: "A 2D platformer game implemented on Python using Pygame where \
  players can control a character to dodge obstacles and defeat enemies. This \
  game attained the intermediate level of achievement (Project Gemini) for NUS' \
  Orbital Programme.",
}

const ProjectPage = () => {
  return (
    <Layout pageTitle="Projects">
      <Row>
        <Col className="m-3">
          <ProjectItem project={theTower}>
            <Button
              href="https://www.youtube.com/watch?v=YXRmgBIPeyA"
              variant="outline-dark"
              target="_blank"
            >
              Demo
            </Button>
            <Button
              className="mx-2"
              href="https://github.com/josuaaah/The-Tower"
              variant="outline-dark"
              target="_blank"
            >
              Repo
            </Button>
          </ProjectItem>
        </Col>

        <Col className="m-3">
        </Col>
      </Row>

    </Layout>
  )
}

export default ProjectPage