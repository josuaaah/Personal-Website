import * as React from 'react'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
  return (
    <Navbar className="navbar navbar-dark bg-dark">
      <Container>
        <Navbar.Brand href="/" className="pe-3"><b>Joshua Chew Jian Xiang</b></Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="/work">Work</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
