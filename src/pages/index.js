import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react'

import { myDescriptionText, myDisplayText, myPhoto, myResumeLink } from '../data/indexData'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Layout from '../components/layout';
import ReactRoundedImage from 'react-rounded-image';

const IndexPage = () => {
  return (
    <Layout pageTitle='Joshua Chew Jian Xiang'>
      <br></br>
      <br></br>
      <Container className="d-flex justify-content-center p-4">
        <ReactRoundedImage image={myPhoto} />
      </Container>
      <h1 class="display-1 text-center">{myDisplayText}</h1>
      <Container className="p-3">
        <p class="lead">{myDescriptionText}</p>
        <Button href={myResumeLink} target="_blank" variant="secondary">Check out my resume!</Button>
      </Container>
    </Layout>
  )
}

export default IndexPage