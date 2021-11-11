import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react'

import Container from 'react-bootstrap/Container'
import Layout from '../components/layout';
import MyPhoto from '../images/joshua.png'
import ReactRoundedImage from 'react-rounded-image';

const IndexPage = () => {
  return (
    <Layout>
      <Container className="d-flex justify-content-center p-5">
        <ReactRoundedImage image={ MyPhoto } />
      </Container>
      <h1 class="display-1 text-center">
        Hello. I am Josuaaah.
      </h1>
      <Container className="p-3">
        <p class="lead">
          I am a third-year Computer Science student at the National University of Singapore.
          I specialize in Artificial Intelligence, am pursuing a Second Major in Statistics, 
          and am also part of the University Scholar's Programme (USP). I am passionate in 
          creating things - literally anything!
        </p>
        <p class="lead">
          Outside Computing, I have a soft spot for fantasy novels, and I used to make music 
          covers a lot before I got busy. Hope we can get in touch soon!
        </p>
      </Container>
    </Layout>
  )
}

export default IndexPage