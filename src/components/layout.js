import * as React from 'react'

import Container from 'react-bootstrap/Container'
import Navigation from './navigation'
import { SocialIcon } from 'react-social-icons';
import { bodyContainer } from './styles.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Navigation />
      <div className={bodyContainer}>
        <title>{pageTitle}</title>
        <main>
          <h1 class="display-5 text-center mt-5 mb-3">{pageTitle}</h1>
          {children}
        </main>
      </div>
      <footer style={{bottom: 0}}>
        <Container className="d-flex justify-content-center p-5">
          <SocialIcon className="m-2" target="_blank" url="https://github.com/josuaaah" />
          <SocialIcon className="m-2" target="_blank" url="https://www.linkedin.com/in/joshua-chew-jx" />
          <SocialIcon className="m-2" target="_blank" url="https://www.youtube.com/JoshuaChewJosuaaah" />
          <SocialIcon className="m-2" target="_blank" url="https://josuaaah.medium.com/" />
        </Container>
      </footer>
    </>
  )
}

export default Layout