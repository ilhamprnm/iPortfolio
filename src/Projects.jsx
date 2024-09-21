import "./styles/Projects.css"
import lashodia from "./images/lashodia.png"
import iPortfolio from "./videos/iportfolio.mp4"
import ujianlah from './images/ujianlah.png'

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
              <img src={lashodia} alt="" />
            </div>
            <div className="project-right-section">
              <h3 className="project-title">Lashodia</h3>
              <p className="project-desc">I React and Tailwindcss to build this e-commerce website. You can see the code and live view by clicking the button below</p>
              <div className="button-cont">
                <a href="https://github.com/ilhamprnm/Lashodia-2" target="_blank">Frontend Code</a>
                <a href="https://lashodia-2.vercel.app/" target="_blank">Live View </a>
              </div>
              <div className="button-cont">
                <a href="https://github.com/ilhamprnm/Lashodia-2-Backend" target="_blank">Backend Code</a>
                
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
              <div className="button-cont">
                <a href="https://github.com/ilhamprnm/iPortfolio" target="_blank">See Code</a>
                <a href="https://iportfolioweb.netlify.app/" target="_blank">Live View </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-container">
          <div className="project-container">
            <div className="project-left-section">
              <img src={ujianlah} alt="ujianlah-image" />
              {/* <video src={appleweb} autoPlay={true} loop muted></video> */}
            </div>
            <div className="project-right-section">
              <h3 className="project-title">Ujianlah</h3>
              <p className="project-desc">I make this website using React and Tailwindcss. You can see the code and live view by clicking the button below</p>
              <div className="button-cont">
                <a href="https://github.com/ilhamprnm/cobaujian" target="_blank">See Code</a>
                <a href="https://ujianlah.netlify.app/" target="_blank">Live View </a>
              </div>
            </div>
          </div>
        </div>

      </div>
  )
} 