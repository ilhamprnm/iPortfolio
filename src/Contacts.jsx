import "./styles/Contacts.css"
import linkedIn from "./images/linkedin-logo.png"
import linkLogo from "./images/link-logo.png"
import emailLogo from "./images/email-logo.png"
import githubLogo from "./images/github-logo.png"

export default function Contacts () {
  return (
    <section className="contact-section" id="contacts"> 
        <h2 className="contact-title">CONTACT</h2>
        <div className="underline"></div>
        <div className="contact-desc-container">
          <p className="contact-desc">Feel free to contact me by contacting one of the contacts below and I will get back to you as soon as possible</p>
        </div>

        <div className="contacts-container">
          <div>
            <div className="contact-box">
              <img className="contact-logo" src={linkedIn} alt="contact-logo" />
              <p>ilhampurnama </p>
              <a href="https://www.linkedin.com/in/ilhampurnama/" target="_blank"><img className="link-logo" src={linkLogo} alt="link-logo"></img></a>
            </div>
          </div>
          
          <div>
            <div className="contact-box">
              <img className="contact-logo" src={githubLogo} alt="contact-logo" />
              <p>ilhamprnm </p>
              <a href="https://github.com/ilhamprnm" target="_blank"><img className="link-logo" src={linkLogo} alt="link-logo"></img></a>
            </div>
          </div>
          
          <div>
            <div className="contact-box email">
              <img className="contact-logo" src={emailLogo} alt="contact-logo" />
              <div className="email-box">
                <p className="my-email">milhamprnm@gmail.com </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}