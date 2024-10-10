import "./styles/Projects.css"
import lashodia from "./images/lashodia.png"
import iPortfolio from "./videos/iportfolio.mp4"
import ujianlah from './images/ujianlah.png'
import reactjs from './icons/react.png'
import tailwindcss from './icons/tailwindcss.png'
import nodejs from './icons/nodejs.png'
import express from './icons/express.png'
import mongodb from './icons/mongodb.png'

export default function Projects () {
  return (
    <div className="projects-section" id="projects">
        <h2 className="projects-title">PROJECTS</h2>
        <div className="underline"></div>
        <div className="projects-desc-container">
          <p className="projects-desc">Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
        </div>

        <div className="projects-container">
          <div className="project-container">
            <div className="project-left-section">
              <img src={ujianlah} alt="ujianlah-image" />
            </div>
            <div className="project-right-section">
              <h3 className="project-title">Ujianlah</h3>
              <p className="project-desc">I make this Tryout Online website using React.js and Tailwindcss for Frontend and Node.js, Express.js and MongoDB for Backend. You can see the code and live view by clicking the button below</p>
              <div className="project-tool-cont">
                <img src={reactjs} alt="react" />
                <img src={tailwindcss} alt="tailwindcss" />
                <img src={nodejs} alt="nodejs" />
                <img src={express} alt="express" />
                <img src={mongodb} alt="mongodb" />
              </div>
              <div className="button-cont">
                <a href="https://github.com/ilhamprnm/Ujianlah" target="_blank">See Code</a>
                <a href="https://ujianlah.vercel.app/" target="_blank">Live View </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-container">
          <div className="project-container">
            <div className="project-left-section">
              <img src={lashodia} alt="" />
            </div>
            <div className="project-right-section">
              <h3 className="project-title">Lashodia</h3>
              <p className="project-desc">I make this E-commerce website using React.js and Tailwindcss for frontend, and Node.js, Express.js and MongoDB for Backend. You can see the code and live view by clicking the button below</p>

              <div className="project-tool-cont">
                <img src={reactjs} alt="react" />
                <img src={tailwindcss} alt="tailwindcss" />
                <img src={nodejs} alt="nodejs" />
                <img src={express} alt="express" />
                <img src={mongodb} alt="mongodb" />
              </div>

              <div className="button-cont lash-cont">
                <a href="https://github.com/ilhamprnm/Lashodia-2" target="_blank">Frontend Code</a>
                <a href="https://github.com/ilhamprnm/Lashodia-2-Backend" target="_blank">Backend Code</a>
                
              </div>
              <div className="button-cont">
                <a href="https://lashodia-2.vercel.app/" target="_blank">Live View </a>
                
              </div>

            </div>
          </div>
        </div>

        <div className="projects-container">
          <div className="project-container ">
            <div className="project-left-section">
              <video src={iPortfolio} autoPlay={true} loop muted></video>
            </div>
            <div className="project-right-section">
              <h3 className="project-title">Portfolio Web</h3>
              <p className="project-desc">I practice my React skill by making portfolio page. You can see the code and live view by clicking the button below</p>

              <div className="project-tool-cont">
                <img src={reactjs} alt="react" />
                
              </div>

              <div className="button-cont">
                <a href="https://github.com/ilhamprnm/iPortfolio" target="_blank">See Code</a>
                <a href="https://iportfolioweb.netlify.app/" target="_blank">Live View </a>
              </div>
            </div>
          </div>
        </div>

        

      </div>
  )
} 