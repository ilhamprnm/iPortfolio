import "./styles/About.css" 
import html from "./icons/skills/html-1.svg"
import javascript from "./icons/skills/javascript-1.svg"
import css from "./icons/skills/css-3.svg"
import react from "./icons/skills/react-2.svg"
import tailwindcss from "./icons/skills/tailwind-css-2.svg"
import github from "./icons/skills/github-icon-1.svg"

export default function About () {
  return (
    <section id="about">
        <div className="about-section">
          <h1 className="about-title">ABOUT ME</h1>
          <div className="underline"></div>
          <div className="about-desc-container">
            <p className="about-desc">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
          </div>
          <div className="about-content">
            <div className="intro-cont">
              <h3>Get to know me!</h3>
              <br />
              <p>I am a fresh graduate from Agrotechnology at Padjadjaran University. Eager to expand my expertise, I am currently focused on enhancing my skills in web development. With a keen interest in technology I am dedicated to honing my abilities and contributing to innovative projects in the field of web development.</p>
              <br />
              <p>I am open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience i would be happy if you contact me. My contacts are listed at the bottom of the page.</p>
            </div>
            <div className="skills-cont">
              <h3>My skills</h3>
              <br />
              <div className="skills-box">
                <div className="skill skill-1"><img src={html} alt="html-icon" /> <span>HTML</span>  </div>
                <div className="skill skill-2"><img src={css} alt="html-icon" /> <span>CSS</span></div>
                <div className="skill skill-3"><img src={javascript} alt="html-icon" /> <span>Javascript</span></div>
                <div className="skill skill-4"><img src={react} alt="html-icon" /> <span>React</span></div>
                <div className="skill skill-5"><img src={tailwindcss} alt="html-icon" /> <span>Tailwindcss</span></div>
                <div className="skill skill-6"><img src={github} alt="html-icon" /> <span>Github</span></div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}