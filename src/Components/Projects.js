import React from 'react';
import ProjectBox from './ProjectBox';

// import QuotesImage from '../images/QuotesImage.png';
import MomomiaImage from '../images/Momomia1.png';
import OtpAuth from '../images/Auth1.png';
import Firebaseauth from '../images/FbAuth.png';





const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
     
        <ProjectBox projectPhoto={OtpAuth} projectName="PasswordlessAuthentication" />
        <ProjectBox projectPhoto={Firebaseauth} projectName="FirebaseAuthentication" />
        {/* <ProjectBox projectPhoto={QuotesImage} projectName="Quotes" /> */}
        <ProjectBox projectPhoto={MomomiaImage} projectName="Momomia" />

      </div>

    </div>
  )
}

export default Projects