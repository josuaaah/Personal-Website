import * as React from 'react'

const TechStack = ({ techs }) => {
  if (techs.length === 0) {
    return (<></>);
  }
  return (
    <div className="mt-3">
      {techs.map(tech => 
      <svg width="40" height="40" viewBox="0 0 180 180">
        {tech.svg}
      </svg>)}
    </div>
  )
}

export default TechStack