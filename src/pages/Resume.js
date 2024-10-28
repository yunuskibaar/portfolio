import React from 'react'
import ProjectCard from '../components/ProjectCard'
import profil from "../img/profil.jpg"
import {Link} from "react-router-dom"
import "../styles/Projects.css"
import CV from "../asset/CV.pdf"
import "../styles//Resume.css"
const Resume = () => {
  return (

    <div className='container'>
    <div><header className="navbar navbar-expand-lg navbar-light ">
    <div className="container">
        <Link className="navbar-brand" to="/">Anasayfa</Link>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                
                <li className="nav-item">
                    <Link className="nav-link" to="/projeler">Projelerim</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/hakkımda">Hakkımda</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/resume">CV</Link>
                </li>
            </ul>
        </div>
    </div>
</header>

    <section>

        <iframe className='resume' src={CV}></iframe>


    </section>



</div>
</div>
  )
}

export default Resume