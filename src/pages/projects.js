import * as React from 'react'

import Col from 'react-bootstrap/Col'
import Layout from '../components/layout'
import ProjectItem from '../components/projectItem'
import Row from 'react-bootstrap/Row'
import { projects } from '../data/projectData'

const ProjectPage = () => {
  return (
    <Layout pageTitle="Projects">
      <h1 className="display-5 text-center mt-5 mb-3">Projects</h1>
      <Row className="justify-content-center">
        {projects.map(project =>
          <Col className="m-2 d-flex justify-content-center">
            <ProjectItem project={project}>
            </ProjectItem>
          </Col>)}
      </Row>
    </Layout>
  );
}

export default ProjectPage