import * as React from 'react'

import Button from 'react-bootstrap/Button'
import Layout from '../components/layout'
import SchoolItem from '../components/schoolItem'

const cs2103 = {
  title: "CS2103 Software Engineering",
  description: 
  "In this course, I submitted an Individual Project (iP) where I implemented a chatbot \
  named Duke that helps keep track of our tasks. Next, I worked in a Team Project (tP) \
  to implement TAskmaster, a Desktop application for teaching assistants to manage their \
  students.",
}

const SchoolPage = () => {
  return (
    <Layout pageTitle="School">
      <h4>Computer Science Modules Taken</h4>
    <SchoolItem module={cs2103}>
      <Button 
        href="https://github.com/josuaaah/Duke" 
        variant="outline-dark" 
        target="_blank">
        Duke
      </Button>
      <Button
        className="mx-2"
        href="https://github.com/josuaaah/TAskmaster"
        variant="outline-dark"
        target="_blank">
        TAskmaster
      </Button>
    </SchoolItem>
    </Layout>
  )
}

export default SchoolPage