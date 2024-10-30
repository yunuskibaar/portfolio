import React, { useState, useEffect } from 'react';
import "../styles/MainPage.css"
import profil from "../img/profil.jpg"
import Typewriter from '../components/TypeWriter';
import { Github,Linkedin } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const MainPage = () => {

 const parantez = "<"  
 const parantez1 = ">"
 const susluParantez = "{"
 const susluParantez1 = "}"


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

      <body className="main-body">
        <div className="container body-container ">
          <div className="photo-text">
            <div className="profil-container">
              <img src={profil} />
            </div>

            <div className="text-container-main">
              <h3>
                <span>Yunus KİBAR</span>
              </h3>

              <div className="typewriter-container">
                <Typewriter texts={["Front-End", "Back-end", "Mobile"]} />
              </div>
            </div>
          </div>

          <div className="proverb">
            <span>"Those who don't move, don't notice their chains"</span>
          </div>

          <div className="contact-container">
            <div className="contact-code">
              <div className="code-tabs">
                <span>
                  {parantez}button className ={susluParantez}styles.btn
                  {susluParantez1} {parantez1}
                </span>
                <br></br>

                <span>Bana Ulaş</span>
                <br></br>
                <span>
                  {parantez}/button{parantez1}
                </span>
              </div>
            </div>

            <div className="cotact-btn-container">
              <a className='contanct-link'
                href="https://wa.me/905060566567?"
                target="_blank"
              >
                <button className="btn contact-button">Bana Ulaş</button>
              </a>
            </div>
          </div>

          <div className="contact-body"></div>
        </div>
      </body>

      <footer className="footer-body">
        <div className="social-footer">
          <a href="https://github.com/yunuskibaar" target="_blank">
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/yunus-kibar-b632b4197"
            target="_blank"
          >
            <Linkedin />
          </a>
        </div>
        <div className="text-footer">
          <span>2024 Yunus KİBAR</span>
        </div>
        {/* <div className='light-footer'>
    İCON
  </div> */}
      </footer>
    </div>
  );
}

export default MainPage