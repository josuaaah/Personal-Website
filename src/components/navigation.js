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
          <Link to="/school" className={navLinkText}>School</Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/books" className={navLinkText}>Books</Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/music" className={navLinkText}>Music</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
