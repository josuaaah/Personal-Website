import * as React from 'react'

import BibleFamilyTreeImage from '../images/bible_family_tree.png'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Layout from '../components/layout'
import ProjectItem from '../components/projectItem'
import Row from 'react-bootstrap/Row'
import SudokuSolverImage from '../images/sudoku_solver.png'
import TheTowerImage from '../images/the_tower.png'

const theTower = {
  image: TheTowerImage,
  title: "The Tower",
  description: "A 2D platformer game implemented on Python using Pygame where \
  players can control a character to dodge obstacles and defeat enemies. This \
  game attained the intermediate level of achievement (Project Gemini) for NUS' \
  Orbital Programme.",
}

const sudokuSolver = {
  image: SudokuSolverImage,
  title: "Sudoku Solver",
  description: "A Desktop application made with a Tkinter GUI and an AI backtracking algorithm. \
  Users can key in any Sudoku puzzle and will receive a solution instantly. \
  Invalid puzzle inputs are detected, and errors are highlighted to the user.",
}

const bibleFamilyTree = {
  image: BibleFamilyTreeImage,
  title: "Bible Family Tree",
  description: "A family tree of the entire Old Testament using PlantUML's class diagram feature, \
  an open-source dataset and a Python script.",
}

const ProjectPage = () => {
  return (
    <Layout pageTitle="Projects">
      <Row>
        <Col className="m-3">
          <ProjectItem project={theTower}>
            <Button 
              href="https://www.youtube.com/watch?v=YXRmgBIPeyA" 
              variant="outline-dark" 
              target="_blank">
              Demo
            </Button>
            <Button
              className="mx-2"
              href="https://github.com/josuaaah/The-Tower"
              variant="outline-dark"
              target="_blank">
              Repo
            </Button>
          </ProjectItem>
        </Col>

        <Col className="m-3">
          <ProjectItem project={sudokuSolver}>
            <Button
              href="https://github.com/josuaaah/Sudoku-Solver"
              variant="outline-dark"
              target="_blank">
              Repo
            </Button>
          </ProjectItem>
        </Col>

        <Col className="m-3">
          <ProjectItem project={bibleFamilyTree}>
            <Button
              href="https://github.com/josuaaah/Bible-Family-Tree"
              variant="outline-dark"
              target="_blank">
              Repo
            </Button>
          </ProjectItem>
        </Col>
      </Row>

    </Layout>
  )
}

export default ProjectPage