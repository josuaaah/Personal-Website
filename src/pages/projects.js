import * as React from 'react'

import Layout from '../components/layout'

const ProjectPage = () => {
  return (
    <Layout pageTitle="Projects">
      <h3>Bookworm</h3>
      <p>
        A CRUD Web Application displaying a list of books read / being read. 
        Implemented using AngularJS and Django, and designed using Bootstrap. 
        Adapted from a PluralSight tutorial.
      </p>

      <h3>Sudoku Solver</h3>
      <p>Solves any partially-filled Sudoku puzzle instantly.</p>

      <h3>Bible Tree</h3>
      <p>
        A family tree of the entire Old Testament using PlantUML's class diagram 
        feature, an open-source dataset and a Python script.
      </p>

      <h3>Cheatsheets</h3>
      <p>
        A collection of summary notes and infographics created in various 
        modules that I took in NUS. Credits for any images used in the notes 
        should go to the various professors teaching these modules.
      </p>
    </Layout>
  )
}

export default ProjectPage