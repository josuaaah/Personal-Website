import * as React from 'react'

import DevIcon from "devicon-react-svg";

const TechStack = ({ techs }) => {
  if (techs.length === 0) {
    return (<></>);
  }
  return (
    <div className="my-2">
      {techs.map(tech => <DevIcon icon={tech.icon} style={{ width: "30px", height: "30px" }} />)}
    </div>
  )
}

export default TechStack