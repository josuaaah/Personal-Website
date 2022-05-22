import BibleFamilyTreeImage from '../images/bible_family_tree.png'
import SudokuSolverImage from '../images/sudoku_solver.png'
import TheTowerImage from '../images/the_tower.png'

const theTower = {
  image: TheTowerImage,
  title: "The Tower",
  description: 
  `A 2D platformer game where players can control a character to dodge obstacles and defeat enemies.`,
  buttons: [
    {
      name: "Demo",
      url: "https://www.youtube.com/watch?v=YXRmgBIPeyA",
    },
    {
      name: "Repo",
      url: "https://github.com/josuaaah/The-Tower",
    },
    {
      name: "Download",
      url: "https://github.com/josuaaah/Sudoku-Solver/releases/tag/v1.0",
    },
  ],
  techs: [],
}

const sudokuSolver = {
  image: SudokuSolverImage,
  title: "Sudoku Solver",
  description: 
  `A Desktop application where users can key in any Sudoku puzzle and will receive a solution instantly.`,
  buttons: [
    {
      name: "Repo",
      url: "https://github.com/josuaaah/Sudoku-Solver",
    },
    {
      name: "Download",
      url: "https://github.com/josuaaah/Sudoku-Solver/releases/tag/v1.0",
    },
  ],
  techs: [
    {
      name: "React",
      icon: "react",
    }
  ],
}

const bibleFamilyTree = {
  image: BibleFamilyTreeImage,
  title: "Bible Family Tree",
  description:
  `A family tree of (almost) all the people mentioned in the Old Testament of the Bible.`,
  buttons: [
    {
      name: "Repo",
      url: "https://github.com/josuaaah/Bible-Family-Tree",
    },
  ],
  techs: [],
}

export let projects = [theTower, sudokuSolver, bibleFamilyTree];