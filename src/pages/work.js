import * as React from 'react'

import Layout from '../components/layout'
import Timeline from '@mui/lab/Timeline';
import WorkItem from '../components/workItem'
import { internships } from '../data/workData'
import { mstfData } from '../data/workData'

const WorkPage = () => {
  return (
    <Layout pageTitle="Work Experience">
      <Timeline>
        {internships.map(intern => <WorkItem work={intern} ></WorkItem>)}
        <WorkItem work={mstfData} ></WorkItem>
      </Timeline>
    </Layout>
  )
}

export default WorkPage