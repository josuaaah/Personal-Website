import * as React from 'react'

import Layout from '../components/layout'
import MstfLogo from '../images/mstf.png'
import WorkItem from '../components/workItem'
import firstInternLogo from '../images/3e_accounting.png'
import secondInternLogo from '../images/wavescan.png'
import thirdInternLogo from '../images/hobnobai.png'

const thirdIntern = {
  logo: thirdInternLogo,
  title: "(Upcoming) Software Engineer Intern",
  subtitle: "Hobnob.ai, Aug 2022 - Dec 2022, Singapore",
  description: 
  "Hobnob.ai is a startup that provides a website for the scheduling of intra-company networking sessions. \
   I will be taking a Leave of Absence (LoA) from NUS to work in this internship, where I will be put in \
   charge of designing and develop its primary web application using Elm, Hasura and Postgres.",
}

const secondIntern = {
  logo: secondInternLogo,
  title: "Frontend Developer Intern",
  subtitle: "WaveScan Technologies Pte. Ltd., May 2022 - Jul 2022, Singapore",
  description: 
  "WaveScan, an A*STAR spin-off company, specializes in the R&D of smart sensor systems using advanced AI. \
   In my upcoming Summer internship with this firm, I will develop the UI/UX for a Desktop application and  \
   add 2D/3D data visualisation features using ReactJS. I will also occasionally fine-tune machine learning \
   algorithms to achieve better model performance.",
}

const firstIntern = {
  logo: firstInternLogo,
  title: "Software Developer Intern",
  subtitle: "3E Accounting Pte. Ltd., May 2021 - Jul 2021, Singapore",
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
  "At the National Maritime Sense-Making Group (NMSG), \
  I maintained large data archives with Microsoft Excel and operate maritime data analysis \
  software on a daily basis. Using the findings of unsupervised machine learning software, \
  I conducted open-source research on various global news developments, and assisted in the \
  writing of reports on maritime happenings.",
}

const WorkPage = () => {
  return (
    <Layout pageTitle="Work Experience">
      <h4>Software Engineering</h4>
      <WorkItem work={thirdIntern} ></WorkItem>
      <WorkItem work={secondIntern} ></WorkItem>
      <WorkItem work={firstIntern} ></WorkItem>
      <h4>National Service</h4>
      <WorkItem work={mstf} ></WorkItem>
    </Layout>
  )
}

export default WorkPage