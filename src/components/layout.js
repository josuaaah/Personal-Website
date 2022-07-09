import * as React from 'react'

import Navigation from './navigation'
import Socials from './socials'
import { bodyContainer } from '../fonts/styles.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <title>{pageTitle}</title>
      <Navigation />
      <br></br>
      <br></br>
      <div className={bodyContainer}>
        <main>
          {children}
        </main>
      </div>
      <footer style={{bottom: 0}}>
        <Socials />
      </footer>
    </>
  )
}

export default Layout