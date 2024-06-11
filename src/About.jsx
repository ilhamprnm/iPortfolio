import "./styles/About.css" 

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
                <div className="skill">HTML</div>
                <div className="skill">Javascript</div>
                <div className="skill">Tailwindcss</div>
                <div className="skill">CSS</div>
                <div className="skill">React</div>
                <div className="skill">Github</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}