import * as React from 'react'

const TechStack = ({ techs }) => {
  if (techs.length === 0) {
    return (<></>);
  }
  return (
    <div className="my-2">
      {techs.map(tech => 
        <img width="25px" height="25px" style={{ marginRight: "10px" }} src={tech.src} ></img>
      )}
    </div>
  )
}

export default TechStack