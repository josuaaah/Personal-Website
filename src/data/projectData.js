import { angularJsIcon, djangoIcon, javaIcon, kerasIcon, numpyIcon, pandasIcon, pumlIcon, pygameIcon, pythonIcon, rubyOnRailsIcon, tensorFlowIcon, tkinterIcon } from './techData'

import BibleFamilyTreeImage from '../images/bible_family_tree.png'
import BookwormImage from '../images/bookworm.png'
import DukeImage from '../images/duke.png'
import SarcasmDetectImage from '../images/sarcasm_detect.png'
import SudokuSolverImage from '../images/sudoku_solver.png'
import TaskmasterImage from '../images/taskmaster.png'
import TheTowerImage from '../images/the_tower.png'
import UrlRnnImage from '../images/url_rnn.png'

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
  techs: [pythonIcon, pygameIcon, rubyOnRailsIcon],
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
  techs: [tkinterIcon],
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
  techs: [pythonIcon, pumlIcon],
}

const urlClassification = {
  image: UrlRnnImage,
  title: "URL Classification",
  description:
  `Detection of websites that are unsafe for children from their URLs through Natural Language Processing.`,
  buttons: [
    {
      name: "Poster",
      url: "https://github.com/josuaaah/URL-Classification/blob/main/deliverables/Group11_Project_Poster.pdf",
    },
    {
      name: "Report",
      url: "https://github.com/josuaaah/URL-Classification/blob/main/deliverables/Project%20Final%20Report.pdf",
    },
    {
      name: "Repo",
      url: "https://github.com/josuaaah/URL-Classification",
    },
  ],
  techs: [numpyIcon, pandasIcon, tensorFlowIcon, kerasIcon],
}

const sarcasmDetection = {
  image: SarcasmDetectImage,
  title: "Reddit Sarcasm Detection",
  description:
  `Explainable detection of sarcastic comments through various Machine Learning algorithms.`,
  buttons: [
    {
      name: "Slides",
      url: "https://github.com/josuaaah/Personal-Website/blob/main/src/static/Sarcasm_Detection_Slides.pdf",
    },
  ],
  techs: [numpyIcon, pandasIcon, tensorFlowIcon, kerasIcon],
}

const bookworm = {
  image: BookwormImage,
  title: "Bookworm",
  description:
  `A simple web application with authentication features to keep track of the books you are reading.`,
  buttons: [
    {
      name: "Demo",
      url: "https://www.youtube.com/watch?v=26zKux_xm1k",
    },
  ],
  techs: [angularJsIcon, djangoIcon],
}

const taskmaster = {
  image: TaskmasterImage,
  title: "TAskmaster",
  description:
  `A Desktop application with a CLI that lets Teaching Assistants (TAs) manage their students and sessions.`,
  buttons: [
    {
      name: "Repo",
      url: "https://github.com/josuaaah/TAskmaster",
    },
    {
      name: "Download",
      url: "https://github.com/josuaaah/TAskmaster/releases/tag/v1.4",
    },
  ],
  techs: [javaIcon],
}

const duke = {
  image: DukeImage,
  title: "Duke",
  description:
  `A chatbot that manages your To-dos and events efficiently with a Command-Line Interface (CLI).`,
  buttons: [
    {
      name: "Repo",
      url: "https://github.com/josuaaah/Duke",
    },
    {
      name: "Download",
      url: "https://github.com/josuaaah/Duke/releases/tag/A-Release",
    },
  ],
  techs: [javaIcon],
}

export let projects = [theTower, sudokuSolver, bibleFamilyTree, sarcasmDetection, urlClassification, duke, taskmaster, bookworm];