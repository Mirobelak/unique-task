import React from 'react'
import "./Footer.css"
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="first">
        <h1>Logo.co</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, alias autem facere harum ut, magnam </p>
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
      <div className="first">
        <h1>Get in touch</h1>
        <img src={Github} alt="" />
        <img src={Instagram} alt="" />
        <img src={LinkedIn} alt="" />
      </div>
    </div>
  )
}

export default Footer