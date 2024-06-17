import logoImage from "./images/iportfolio-logo.png"
import hamburgerMenu from "./icons/hamburger-menu.svg"
import closeMenu from "./icons/close-icons.webp"
import "./styles/Header.css"

export default function Header() {

  
  function toggleHamburger () {
    const selectHamburger = document.getElementById('hamburger');
    const selectClose = document.getElementById('close-icon');
    const selectDropdown = document.getElementById('dropdown-menu');

    selectHamburger.classList.remove('hamburger-menu');
    selectHamburger.classList.add('hamburger-menu-close');

    selectClose.classList.add('close-icon-active');

    selectDropdown.classList.add('dropdown-menu-active');
  }
  
  function toggleClose() {
    const selectClose = document.getElementById('close-icon');
    const selectHamburger = document.getElementById('hamburger');
    const selectDropdown = document.getElementById('dropdown-menu');

    selectHamburger.classList.remove('hamburger-menu-close');
    selectHamburger.classList.add('hamburger-menu');

    selectClose.classList.remove('close-icon-active');

    selectDropdown.classList.remove('dropdown-menu-active');

  }

  return (
    <header className="header">
        <div className="left-section">
          <a href="#"><img alt="logo-image" src={logoImage} className="iPortfolio-logo"></img></a>
        </div>
        <div className="right-section">
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#contacts">CONTACTS</a></li>
          </ul>
          <img alt="hamburger-menu-icons" src={hamburgerMenu} className="hamburger-menu" id="hamburger" onClick={toggleHamburger}></img>
          <img alt="close-icon" className="close-icon" id="close-icon" src={closeMenu} onClick={toggleClose}></img>
        </div>
        <div className="dropdown-menu" id="dropdown-menu">
            <ul>
              <li><a href="#home">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#projects">PROJECTS</a></li>
              <li><a href="#contacts">CONTACTS</a></li>
            </ul>
          </div>
      </header>
  )
}