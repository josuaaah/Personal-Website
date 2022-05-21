import * as React from 'react'

import Col from 'react-bootstrap/Col'
import Layout from '../components/layout'
import ProjectItem from '../components/projectItem'
import Row from 'react-bootstrap/Row'
import { projects } from '../data/projectData'

const ProjectPage = () => {
  return (
    <Layout pageTitle="Projects">
      <Row>
        {projects.map(project =>
          <Col className="m-3">
            <ProjectItem project={project}>
            </ProjectItem>
          </Col>)}
      </Row>
    </Layout>
  );
}

export default ProjectPage