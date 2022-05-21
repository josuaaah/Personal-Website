import BibleFamilyTreeImage from '../images/bible_family_tree.png'
import SudokuSolverImage from '../images/sudoku_solver.png'
import TheTowerImage from '../images/the_tower.png'

const theTower = {
  image: TheTowerImage,
  title: "The Tower",
  description: 
  `A 2D platformer game implemented on Python using Pygame where players can 
  control a character to dodge obstacles and defeat enemies. This game attained 
  the intermediate level of achievement (Project Gemini) for NUS' Orbital Programme.`,
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
}

const sudokuSolver = {
  image: SudokuSolverImage,
  title: "Sudoku Solver",
  description: 
  `A Desktop application made with a Tkinter GUI and an AI backtracking algorithm. 
  Users can key in any Sudoku puzzle and will receive a solution instantly. 
  Invalid puzzle inputs are detected, and errors are highlighted to the user.`,
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
}

const bibleFamilyTree = {
  image: BibleFamilyTreeImage,
  title: "Bible Family Tree",
  description:
  `A family tree of the entire Old Testament using PlantUML's class diagram feature, 
  an open-source dataset and a Python script.`,
  buttons: [
    {
      name: "Repo",
      url: "https://github.com/josuaaah/Bible-Family-Tree",
    },
  ],
}

export let projects = [theTower, sudokuSolver, bibleFamilyTree];