import * as React from 'react'

import Image from 'react-bootstrap/Image'

const TechStack = ({ techs }) => {
  if (techs.length === 0) {
    return (<></>);
  }
  return (
    <div className="mt-2">
      {techs.map(tech => <Image width="35px" height="35px" src={tech.src} ></Image>)}
    </div>
  )
}

export default TechStack