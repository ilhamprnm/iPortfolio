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

    // function addCenter () {
    //   const contact = document.querySelector(`.contact-${number}`);
    //   contact.style.justifyContent = 'flex-start';
    // }
    
    setTimeout(addOpen, 500)
    // setTimeout(addCenter, 600)
   
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

       
      </section>
  )
}