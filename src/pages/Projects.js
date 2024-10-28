import React, { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import profil from "../img/profil.jpg";
import { Link } from "react-router-dom";
import "../styles/Projects.css";
import ScrollReveal from "scrollreveal";

import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../img/white.jpg"

import { Github } from "react-bootstrap-icons";



const Projects = () => {
  useEffect(() => {
    ScrollReveal().reveal("#card", {
      origin: "left", // Kartların alt taraftan gelmesini sağlıyor
      distance: "50px", // Hareket mesafesi
      duration: 750, // Animasyon süresi (ms)
      interval: 200, // Kartlar arasında sırayla görünmesi için gecikme
    });
  }, []);
  return (
    <div>
      <header className="navbar navbar-expand-lg navbar-light ">
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
        <div className="container mt-4" id="projects">
          <div className="row">
            <div className="col md-4 mb-4" id='card'>
              <ProjectCard title="Proje Başlık"
               desc="proje açıklama alanı" 
               img={[img1, img1, img1]}
              />
            </div>

            
            <div className="col md-4 mb-4" id='card'>
              <ProjectCard title="Proje Başlık"
               desc="proje açıklama alanı" 
               img={[img1, img1, img1]}
              />
            </div>


            <div className="col md-4 mb-4" id='card'>
              <ProjectCard title="Proje Başlık"
               desc="proje açıklama alanı" 
               img={[img1, img1, img1]}
              />
            </div>


            <div className="col md-4 mb-4" id='card'>
              <ProjectCard title="Proje Başlık"
               desc="proje açıklama alanı" 
               img={[img1, img1, img1]}
              />
            </div>


            <div className="col md-4 mb-4" id='card'>
              <ProjectCard title="Proje Başlık"
               desc="proje açıklama alanı" 
               img={[img1, img1, img1]}
              />
            </div>


            <div className="col md-4 mb-4" id='card'>
              <ProjectCard title="Proje Başlık"
               desc="proje açıklama alanı" 
               img={[img1, img1, img1]}
              />
            </div>


            <div className="col md-4 mb-4" id='card'>
              <ProjectCard title="Proje Başlık"
               desc="proje açıklama alanı" 
               img={[img1, img1, img1]}
              />
            </div>


            <div className="col md-4 mb-4" id='card'>
              <ProjectCard title="Proje Başlık"
               desc="proje açıklama alanı" 
               img={[img1, img1, img1]}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
