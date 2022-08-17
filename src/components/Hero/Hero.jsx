import React from 'react'
import "./hero.css"
import Header from "../Header/Header"
import hero_image from "../../assets/main-hero.png"


const Hero = () => {
  return (
    <div className='hero' id='home' >
        <div className='left-h'>
            <Header/>
              <div className="hero-text">
                <div>
                    <h1 className='heading' > Unique.sk </h1>
                </div>
                <div><p className='hero-p' >Lorem Ipsum is simply dummy text <br/>
                 of the printing and typesetting industry.<br/>
                  Lorem Ipsum has been the industry's standard dummy text</p></div>
                <div className="button">
                    <button className='btn hero-btn' >Get started <img class="arrow" src="https://cdn.animaapp.com/projects/62fa4955b11cd084da5d767b/releases/62fa497667652f8983ee8d01/img/download@1x.png"></img> </button>
                </div>
            </div>
            </div>
            <div className="right">
                <img src={hero_image} alt="" className='hero-image' />
            </div>
          
    </div>
  )
}

export default Hero