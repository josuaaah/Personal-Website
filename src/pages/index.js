import * as React from 'react'

import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage 
        alt="A black-and-white photo of Joshua strumming a guitar and chilling."
        src="../images/joshua-guitar.jpg"/>
      <p>
        Hi there! I am a third-year Computer Science student at the National University of Singapore.
        I specialize in Artificial Intelligence, am pursuing a Second Major in Statistics, and am also 
        part of the University Scholar's Programme (USP). I am passionate in creating things - literally
        anything! That is the reason why I have joined Computing.
      </p>
      <br></br>
      <p>
        Outside Computing, I have a soft spot for fantasy novels, and I used to make music covers a lot 
        before I got busy. Hope we can get in touch soon! :D
      </p>
    </Layout>
  )
}

export default IndexPage