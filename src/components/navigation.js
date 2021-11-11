import * as React from 'react'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
  return (
    <Navbar className="navbar navbar-dark bg-dark">
      <Container>
        <Nav>
          <a class="navbar-brand" href="/">Josuaaah</a>
          <Nav.Link href="/work">Work</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
