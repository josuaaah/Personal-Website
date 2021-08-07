import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>NUS Year 3 Computer Science student, Minor in Statistics, University Scholars Programme</p>
      <StaticImage
        alt="A black-and-white photo of Joshua strumming a guitar and chilling."
        src="../images/joshua-guitar.jpg"
      />
    </Layout>
  )
}

export default IndexPage
