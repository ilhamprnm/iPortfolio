import "./styles/Contacts.css"
import linkedIn from "./images/linkedin-logo.png"
import emailLogo from "./images/email-logo.svg"
import githubLogo from "./images/github-logo.png"
import linkedInpp from "./images/pp.jpg"
import githubpp from "./images/pp-grey.jpg"
import emailpp from "./images/pp-bw.jpeg"

export default function Contacts () {

 
  function clickToOpen(number) {
    const contactElement = document.querySelectorAll(".contact-item");
    contactElement.forEach(item => {
      item.classList.remove('opened');
    })
    const element = document.querySelector(`.contact-${number}`);
    element.classList.add('opened')

    const cardElement = document.querySelectorAll('.card');
    cardElement.forEach(item => {
      item.classList.remove('open')
    })

    function addOpen () {
      const card = document.querySelector(`.card-${number}`);
      card.classList.add('open')
    }

    setTimeout(addOpen, 500)
   
  }
  
  return (
    <section className="contact-section" id="contacts"> 
      <div className="cont-header" >
        <h2 className="contact-title">CONTACT</h2>
        <div className="underline"></div>
        <p className="contact-desc">Feel free to contact me by contacting one of the contacts below and I will get back to you as soon as possible</p>
      </div>

      <div className="contact-cont">
        <div className="contact-item contact-1 opened" >
          <img src={linkedIn} className="contact-logo" alt="linkedin-logo" />
          <button onClick={() => {clickToOpen(1)}}>Open</button>
          <div className="card card-1 open">
           <div className="card-image-cont">
            <img src={linkedInpp} alt="card-image" />
           </div>
           <div className="card-desc-cont">
            <span>Muhammad Ilham Purnama</span>
            <a href="https://www.linkedin.com/in/ilhampurnama/" target="_blank">https://www.linkedin.com/in/ilhampurnama/</a>
           </div>
          </div>
        </div>
        
        <div className="contact-item contact-2" >
          <img src={githubLogo} className="contact-logo" alt="github-logo" />
          <button onClick={() => {clickToOpen(2)}}>Open</button>
          <div className="card card-2">
           <div className="card-image-cont">
            <img src={githubpp} alt="card-image" />
           </div>
           <div className="card-desc-cont">
            <span>Muhammad Ilham Purnama</span>
            <a href="https://github.com/ilhamprnm" target="_blank">https://github.com/ilhamprnm</a>
           </div>
          </div>
        </div>

        <div className="contact-item contact-3 " >
          <img src={emailLogo} className="contact-logo" alt="gmail-logo" />
          <button onClick={() => {clickToOpen(3)}}>Open</button>
          <div className="card card-3 ">
           <div className="card-image-cont">
            <img src={emailpp} alt="card-image" />
           </div>
           <div className="card-desc-cont">
            <span>Muhammad Ilham Purnama</span>
            <a>milhamprnm@gmail.com</a>
           </div>
          </div>
        </div>
      </div>

      <div className="contact-me-cont">
        <form action="https://api.web3forms.com/submit" method="POST">

          <input type="hidden" name="access_key" value="2d074619-c67d-4fc1-b10e-854757ac5c5d"/>

          <div className="label-cont">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Please input your name" required/>
          </div>

          <div className="label-cont">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Please input your email" required/>
          </div>

          <div className="label-cont">
            <label htmlFor="message">Message</label>
            <textarea type="text" id="message" name="message" rows={3} cols={30} placeholder="Please input your message" required/>
          </div>

          <button type="submit">Submit</button>

        </form>
      </div>
       
      </section>
  )
}