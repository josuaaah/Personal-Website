import * as React from 'react'

import Layout from '../components/layout'

const WorkPage = () => {
  return (
    <Layout pageTitle="Work Experience">
      <h3>Intern (Software Developer)</h3>
      <h4>3E Accounting Pte. Ltd., May 2021 - Jul 2021</h4>
      <p>
        I spent the Summer of 2021 contributing to the full-stack development of a Human Resource Management System (HRMS),
        using web development technologies like AngularJS, Django and MySQL. After improved the visual display of notifications 
        and uploaded attachments, I developed a new module to let employees digitally clock their work timings.
      </p>

      <h3>Intelligence Research Assistant</h3>
      <h4>National Maritime Sense-Making Group (NMSG), Apr 2017 - Dec 2019</h4>
      <p>
        My vocation in National Service (NS) was to maintain large data archives with Microsoft Excel and operate maritime data
        analysis software on a daily basis. Using the findings of unsupervised machine learning software, I conducted open-source
        research on various global news developments, and assisted in the writing of reports on maritime happenings.
      </p>
    </Layout>
  )
}

export default WorkPage