import * as React from 'react'

import { container, heading } from './styles.module.css'

import Navigation from './navigation'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Navigation />
      <div className={container}>
        <title>{pageTitle}</title>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
