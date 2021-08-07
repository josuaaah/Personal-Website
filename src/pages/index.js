import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>NUS Year 3 Computer Science student, Minor in Statistics, University Scholars Programme</p>
      <StaticImage
        alt="A software engineer hard at work."
        src="https://thumbs.dreamstime.com/b/portrait-his-nice-attractive-focused-brunette-guy-creating-script-coding-java-html-mysql-database-using-languages-software-161965647.jpg"
      />
    </Layout>
  )
}

export default IndexPage
