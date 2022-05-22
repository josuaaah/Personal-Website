import * as React from 'react'

import AniLink from "gatsby-plugin-transition-link/AniLink"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
  return (
    <Navbar className="navbar navbar-dark bg-dark" fixed="top">
      <Container>
        <AniLink className="navbar-brand" cover direction="up" bg="#212529" duration={0.7} to="/">
          <b>Joshua Chew Jian Xiang</b>
        </AniLink>

        <Nav>
          <AniLink className="nav-link" cover direction="right" bg="#212529" duration={0.7} to="/work">
            Experience
          </AniLink>
          <AniLink className="nav-link" cover direction="left" bg="#212529" duration={0.7} to="/projects">
            Projects
          </AniLink>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
