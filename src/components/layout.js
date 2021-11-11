import * as React from 'react'

import Navigation from './navigation'
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
    </>
  )
}

export default Layout