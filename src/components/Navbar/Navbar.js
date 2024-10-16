import React from 'react'
import './Navbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Navbar() {
  const text = "Free Gift 🎁 on all app orders. Download Now >"
  return (
    <>
        <div className="announcementBanner">
          <p>{text}</p>
          </div>
        <div className="navbar">
          <div className="navTop">
            <div className="logo">
              <img src="https://pbs.twimg.com/profile_images/1705185417593581568/pQ6LqPWM_400x400.jpg" alt="logo" />
            </div>
            <div className="sitename">
              <h1>Fennec</h1>
            </div>
            <div className="navOptions">
              <i className="fa-solid fa-magnifying-glass"></i>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-bag-shopping"></i>
              <i className="fa-regular fa-user"></i>
            </div>
          </div>
          <div className="navBottom">
            <h4>SHOP</h4>
            <h4>SKILLS</h4>
            <h4>STORIES</h4>
            <h4>ABOUT</h4>
            <h4>CONTACT US</h4>
          </div>
      </div>
    </>
  )
}

export default Navbar