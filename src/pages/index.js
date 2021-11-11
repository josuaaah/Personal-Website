import * as React from 'react'

import Layout from '../components/layout'
import MyPhoto from "../images/joshua.png"
import ReactRoundedImage from "react-rounded-image";

const IndexPage = () => {
  return (
    <Layout>
      <ReactRoundedImage image={MyPhoto} />
      <h1>Hello! I'm Josuaaah.</h1>
      <p>
        I am a third-year Computer Science student at the National University of Singapore.
        I specialize in Artificial Intelligence, am pursuing a Second Major in Statistics, and am also 
        part of the University Scholar's Programme (USP). I am passionate in creating things - literally
        anything! That is the reason why I have joined Computing.
      </p>
      <p>
        Outside Computing, I have a soft spot for fantasy novels, and I used to make music covers a lot 
        before I got busy. Hope we can get in touch soon! :D
      </p>
    </Layout>
  )
}

export default IndexPage