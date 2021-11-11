import * as React from 'react'

import { navLinkItem, navLinkText, navLinks } from './styles.module.css'

import { Link } from 'gatsby'

const Navigation = () => {
  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>Home</Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/work" className={navLinkText}>Work</Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/projects" className={navLinkText}>Projects</Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/books" className={navLinkText}>Books</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
