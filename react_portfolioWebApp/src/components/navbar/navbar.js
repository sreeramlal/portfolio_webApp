import React from 'react';

function Navbar() {
    const ToggleMenu = () => {
     const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    }
          
    return (
      <div>
        <nav id="desktop-nav">
          <div className="logo">Sreeramlal VP</div>
          <div>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <nav id="hamburger-nav">
          <div className="logo">Sreeramlal VP</div>
          <div className="hamburger-menu">
            <div className="hamburger-icon" onClick={ToggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="menu-links">
              <ul>  
                <li><a href="#about" onClick={ToggleMenu}>About</a></li>
                <li><a href="#experience" onClick={ToggleMenu}>Experience</a></li>
                <li><a href="#projects" onClick={ToggleMenu}>Projects</a></li>
                <li><a href="#contact" onClick={ToggleMenu}>Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Navbar;
  