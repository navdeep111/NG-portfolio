import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    

    QuotesDesc:"Random Quotes Generator is a simple web application that displays random inspirational, motivational, or humorous quotes at the click of a button. It helps users find daily inspiration and share meaningful words effortlessly.",
    QuotesGithub:"https://github.com/navdeep111/Random-Quotes-Generator-",
    QuotesWebsite:"https://quotes.navdeep.tech/",

    MomomiaDesc:"Food Ordering Website is a user-friendly platform that allows customers to browse menus, place orders.",
    MomomiaGithub:"https://github.com/navdeep111/food-ordering-website",
    MomomiaWebsite:"https://momomia.navdeep.tech/",


  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox