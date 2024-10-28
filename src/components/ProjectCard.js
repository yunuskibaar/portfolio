import React, { useState } from 'react';
import "../styles/ProjectCard.css";
import '@coreui/coreui/dist/css/coreui.min.css';
import { Github,Search } from 'react-bootstrap-icons';
const ProjectCard = ({ title, desc, img = [] }) => {
  

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        
        <ul className='project-list'>
          {img.map((imgSrc, index) => (
            <li className='project-photo' key={index} >
              <img src={imgSrc} alt='photo' />
            </li>
          ))}
        </ul>
        
        <div className='down'>
          <a href="#" className="card-link"><Github/></a>
          <a href="#" className="card-link"><Search/></a>
        </div>
        
        
      </div>
    </div>
  );
}

export default ProjectCard;
