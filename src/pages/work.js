import * as React from 'react'

import Layout from '../components/layout'
import WorkItem from '../components/workItem'
import { internships } from '../data/workData'
import { mstfData } from '../data/workData'

const WorkPage = () => {
  return (
    <Layout pageTitle="Work Experience">
      <h4>Software Engineering</h4>
      {internships.map(intern =>
        <WorkItem work={intern} ></WorkItem>
      )}
      <h4>National Service</h4>
      <WorkItem work={mstfData} ></WorkItem>
    </Layout>
  )
}

export default WorkPage