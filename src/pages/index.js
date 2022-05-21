import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react'

import { myDescriptionText, myDisplayText, myPhoto } from '../data/indexData'

import Container from 'react-bootstrap/Container'
import Layout from '../components/layout';
import ReactRoundedImage from 'react-rounded-image';

const IndexPage = () => {
  return (
    <Layout>
      <Container className="d-flex justify-content-center p-5">
        <ReactRoundedImage image={myPhoto} />
      </Container>
      <h1 class="display-1 text-center">{myDisplayText}</h1>
      <Container className="p-3">
        <p class="lead">{myDescriptionText}</p>
      </Container>
    </Layout>
  )
}

export default IndexPage