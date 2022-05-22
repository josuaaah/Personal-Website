import { angularJsIcon, djangoIcon, elmIcon, hasuraIcon, mySqlIcon, postgreSqlIcon, reactIcon, vtkIcon } from './techData'

import MstfLogo from '../images/mstf.png'
import firstInternLogo from '../images/3e_accounting.png'
import secondInternLogo from '../images/wavescan.png'
import thirdInternLogo from '../images/hobnobai.png'

const thirdIntern = {
  logo: thirdInternLogo,
  position: "Software Engineer Intern",
  company: "Hobnob.ai",
  period: "Aug - Dec 2022",
  description: 
  `This company is a startup that provides a website for the scheduling of intra-company networking sessions. 
   I will be taking a Leave of Absence (LoA) from NUS to work in this internship, where I will be put in 
   charge of designing and developing its primary web application.`,
   techs: [elmIcon, hasuraIcon, postgreSqlIcon],
}

const secondIntern = {
  logo: secondInternLogo,
  position: "Frontend Developer Intern",
  company: "WaveScan",
  period: "May - Jul 2022",
  description: 
  `This A*STAR spin-off company specializes in the R&D of smart sensor systems using advanced AI. 
   I am currently developing a Desktop application that allows 2D/3D visualizations of scanned wave data.
   I will also be ocassionally fine-tuning machine learning algorithms to achieve better model performance.`,
   techs: [reactIcon, vtkIcon],
}

const firstIntern = {
  logo: firstInternLogo,
  position: "Software Developer Intern",
  company: "3E Accounting",
  period: "May - Jul 2021",
  description: 
  `I contributed to the full-stack development of a Human Resource Management System (HRMS). 
   After improving the visual display of notifications and uploaded attachments, I developed 
   a new module to let employees digitally clock their work timings.`,
   techs: [angularJsIcon, djangoIcon, mySqlIcon],
}

const mstf = {
  logo: MstfLogo,
  position: "Intelligence Research Assistant",
  company: "National Maritime Sense-Making Group",
  period: "Apr 2017 - Dec 2019",
  description: 
  `I maintained large data archives with Microsoft Excel and operate maritime data analysis 
  software on a daily basis. Using the findings of unsupervised machine learning software, 
  I conducted open-source research on various global news developments, and assisted in the 
  writing of reports on maritime happenings.`,
  techs: [],
}

export let internships = [thirdIntern, secondIntern, firstIntern];
export let mstfData = mstf;