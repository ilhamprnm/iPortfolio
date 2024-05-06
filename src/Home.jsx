import "./styles/Home.css"

export default function Home () {
  return (
    <section className="home-section" id="home">
        <div className="dropdown-menu" id="dropdown-menu">
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#contacts">CONTACTS</a></li>
          </ul>
        </div>
        <div className="home-message">
          <div className="message-container"> 
            <h1 className="name-message">Hai, i'm Muhammad Ilham Purnama</h1>
          
            <p className="ex-message">Now, i'm improving my skills in web development and data science. I created this website as a medium for me to show my abilities in creating a websites. </p>
            <a href="#projects" className="projects-button">Projects</a>
          </div>
        </div>
      </section>
      
  )
}