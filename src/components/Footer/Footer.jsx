import React from 'react'
import "./Footer.css"
import Facebook from "../../assets/facebook.png"
import Twitter from "../../assets/linkedin.png"
import LinkedIn from "../../assets/twitter.com.png"

const Footer = () => {
  return (
   <div className="foot-container">
    <div className="footer-container">
      <div className="first">
        <h1>Logo.co</h1>
        <p>Adress: 135 Barnard St. Brooklyn, NY 10036, United States Phone: 1-400-123-1234 Email: 
          example@creativelab.com </p>
      </div>
      <div className="first">
        <h1>Services</h1>
        <a href='#' >Apps developer</a>
        <a href='#' >Graphic design</a>
        <a href='#' >Web Developer</a>
        <a href='#' >Marketing</a>
        <a href='#' >IOS Developer</a>
      </div>
      <div className="first">
        <h1>Links</h1>
        <a href='#' >About</a>
        <a href='#' >Blog</a>
        <a href='#' >Team</a>
        <a href='#' >Portfolio</a>
        <a href='#' >Sign in</a>
      </div>
      <div className="first last">
        <h1>Get in touch</h1>
        <div className='logos'>
        <img className='logo' src={Facebook} alt="" />
        <img className='logo' src={LinkedIn} alt="" />
        <img className='logo' src={Twitter} alt="" />
        </div>
      </div>
    </div>
    <div className="copyright">
      <p>© Copyright 2020 Creative . X Design by Sumon</p>
    </div>
    </div>
  )
}

export default Footer