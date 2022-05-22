import BibleFamilyTreeImage from '../images/bible_family_tree.png'
import React from 'react'
import SudokuSolverImage from '../images/sudoku_solver.png'
import TheTowerImage from '../images/the_tower.png'

const reactIcon = {
  name: "React",
  svg: <svg><path fill-rule="evenodd" clip-rule="evenodd" d="M0 64c0 51.617 12.383 64 64 64 51.617 0 64-12.383 64-64 0-51.617-12.383-64-64-64C12.383 0 0 12.383 0 64zm25.808 13.295l20.075-45.621C49.27 23.984 55.788 19.813 64 19.813c8.212 0 14.729 4.17 18.118 11.86l20.074 45.622c.912 2.216 1.694 5.084 1.694 7.56 0 11.34-7.951 19.291-19.292 19.291-3.862 0-6.93-.985-10.035-1.983-3.182-1.022-6.403-2.057-10.559-2.057-4.108 0-7.408 1.044-10.653 2.071-3.138.993-6.225 1.969-9.941 1.969-11.34 0-19.292-7.95-19.292-19.29 0-2.477.783-5.345 1.695-7.561zM64 39.625l-19.813 44.84c5.866-2.738 12.644-4.041 19.813-4.041 6.909 0 13.947 1.303 19.552 4.04L64 39.626z" fill="#5A45FF"></path></svg>,
};

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
  techs: [reactIcon, reactIcon, reactIcon, reactIcon, reactIcon, reactIcon, reactIcon, reactIcon],
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