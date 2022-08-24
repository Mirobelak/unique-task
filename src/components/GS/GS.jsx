import React from 'react'
import "./GS.css"
import hero_image from "../../assets/pc.png"



const Reasons = () => {
   
  return (
   <a className='a-gs' href='#'>
   <div className="get-started" id="gs">
    <div className="gs-container">
        <div className="left-gs">
            <div className="first-text">
            <h1>
            Let's get started
            </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. </p>
            </div>
            <div className="second-text">
                <h2> 
                    1. Best performance
                </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <h2> 
                    2. Easy settings
                </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <h2> 
                    3. Secure multi usable
                </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
        </div>
        <div className="right-gs">
            <img id='img1' src={hero_image} alt="" />
        </div>
        </div>
   </div>

   </a>
  )
}

export default Reasons