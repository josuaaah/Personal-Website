import * as React from 'react'

import Container from 'react-bootstrap/Container'
import { SocialIcon } from 'react-social-icons';

const Socials = () => {
  return (
    <Container className="d-flex justify-content-center p-5">
      <SocialIcon className="m-2" target="_blank" url="https://github.com/josuaaah" />
      <SocialIcon className="m-2" target="_blank" url="https://www.linkedin.com/in/joshua-chew-jx" />
      <SocialIcon className="m-2" target="_blank" url="https://www.youtube.com/JoshuaChewJosuaaah" />
      <SocialIcon className="m-2" target="_blank" url="https://josuaaah.medium.com/" />
    </Container>
  )
}

export default Socials