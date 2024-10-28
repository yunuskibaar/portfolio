import React from 'react'
import MainPage from './MainPage'
import { Link } from 'react-router-dom'
import Profil from "../img/profil.jpg"
import "../styles/About.css"
const About = () => {
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

    <div  className="container" id="about-container">
        <div className="about-box">
          <div className="left">
            <img className="profil-pic"
              src={Profil}
              alt="Rastgele Fotoğraf"
            />
            <h4 className="ben">Yunus KİBAR</h4>
            <div className="skills">
              <h6 className="skills-text" >Yetenekler</h6>
              <ul className="skills-list">
                <li className="skills-item">HTML</li>
                <li className="skills-item">CSS</li>
                <li className="skills-item">Javascript</li>
                <li className="skills-item">React.js</li>
                <li className="skills-item">Node.js</li>
                <li className="skills-item">Python</li>
                <li className="skills-item">C#</li>
              </ul>
            </div>
          </div>
          <div className="right">
            <p className="about-text" >
            Trakya Üniversitesi Bilgisayar Mühendisliği bölümünden mezun oldum. 
            Yazılıma ilgi duymam Python programlama diliyle başladı ve algoritma kurma becerilerimi geliştirdikçe web tasarımı alanına 
            yöneldim. HTML, CSS ve JavaScript kullanarak birçok proje geliştirdim ve sağlam bir temel oluşturdum. 
            Ardından React.js ile proje geliştirerek hem daha hızlı çalışan hem de daha modern tasarımlar üretmeye başladım. 
            Kendimi geliştirdiğim ana yazılım dili JavaScript olsa da, farklı programlama yöntemlerine ve teknolojilere açık olmak için 
            Asp.Net Core ile backend geliştirme üzerine de çalışmalar yapıyorum.
            </p>
          </div>
        </div>
      </div>


</div>
  )
}

export default About