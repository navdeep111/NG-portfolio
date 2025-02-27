import React from 'react';
import ProjectBox from './ProjectBox';

import QuotesImage from '../images/QuotesImage.png';
import MomomiaImage from '../images/MomomiaImage.png';



const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        
        <ProjectBox projectPhoto={QuotesImage} projectName="Quotes" />
        <ProjectBox projectPhoto={MomomiaImage} projectName="Momomia" />

      </div>

    </div>
  )
}

export default Projects