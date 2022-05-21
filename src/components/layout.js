import * as React from 'react'

import Navigation from './navigation'
import Socials from './socials'
import { bodyContainer } from './styles.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Navigation />
      <div className={bodyContainer}>
        <title>{pageTitle}</title>
        <main>
          <h1 className="display-5 text-center mt-5 mb-3">{pageTitle}</h1>
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