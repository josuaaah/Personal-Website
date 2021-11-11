import * as React from 'react'

import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Layout from '../components/layout'
import MstfLogo from '../images/mstf.png'
import Row from 'react-bootstrap/Row'
import WorkItem from '../components/workItem'
import firstInternLogo from '../images/3e_accounting.png'

const firstIntern = {
  logo: firstInternLogo,
  title: "Intern (Software Developer)",
  subtitle: "May 2021 - Jul 2021, Singapore",
  description: 
  "I contributed to the full-stack development of a Human Resource Management System (HRMS), \
  using web development  technologies like AngularJS, Django and MySQL. After improving the \
  visual display of notifications and uploaded attachments, I developed a new module to let \
  employees digitally clock their work timings.",
}

const mstf = {
  logo: MstfLogo,
  title: "Intelligence Research Assistant",
  subtitle: "Apr 2017 - Dec 2019, Singapore",
  description: 
  "I maintained large data archives with Microsoft Excel and operate maritime data analysis \
  software on a daily basis. Using the findings of unsupervised machine learning software, \
  I conducted open-source research on various global news developments, and assisted in the \
  writing of reports on maritime happenings.",
}

const WorkPage = () => {
  return (
    <Layout pageTitle="Work Experience">
      <h4>Software Engineering</h4>
      <WorkItem
        logo={firstIntern.logo}
        title={firstIntern.title}
        subtitle={firstIntern.subtitle}
        description={firstIntern.description}
      ></WorkItem>

      <h4>National Service</h4>
      <WorkItem
        logo={mstf.logo}
        title={mstf.title}
        subtitle={mstf.subtitle}
        description={mstf.description}
      ></WorkItem>
    </Layout>
  )
}

export default WorkPage