import "./styles/Projects.css"
import youtube from "./images/youtube.jpg"
import amazon from "./images/amazon.jpg"
import iPortfolio from "./images/iPortfolio.jpg"

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
              <a href="https://github.com/ilhamprnm/Youtube-Mockup" target="_blank"><img src={youtube} alt="project-image" /></a>
            </div>
            <div className="project-right-section">
              <h3 className="project-title">Youtube</h3>
              <p className="project-desc">I practice my HTML and CSS skills by making mock-up page from YouTube. You can see the code by clicking the button below</p>
              <a href="https://github.com/ilhamprnm/Youtube-Mockup" target="_blank">See Code</a>
            </div>
          </div>
        </div>

        <div className="projects-container">
          <div className="project-container">
            <div className="project-left-section">
              <a href="https://github.com/ilhamprnm/Amazon-Mockup" target="_blank"><img src={amazon} alt="project-image" /></a>
            </div>
            <div className="project-right-section">
              <h3 className="project-title">Amazon</h3>
              <p className="project-desc">I practice my javascript skill by making mock-up page from Amazon. You can see the code by clicking the button below</p>
              <a href="https://github.com/ilhamprnm/Amazon-Mockup" target="_blank">See Code</a>
            </div>
          </div>
        </div>

        <div className="projects-container">
          <div className="project-container last-project">
            <div className="project-left-section">
              <a href="https://github.com/ilhamprnm/iPortfolio" target="_blank"><img src={iPortfolio} alt="project-image" /></a>
            </div>
            <div className="project-right-section">
              <h3 className="project-title">Portfolio Web</h3>
              <p className="project-desc">I practice my React skill by making portfolio page. You can see the code by clicking the button below</p>
              <a href="https://github.com/ilhamprnm/iPortfolio" target="_blank">See Code</a>
            </div>
          </div>
        </div>
      </div>
  )
} 