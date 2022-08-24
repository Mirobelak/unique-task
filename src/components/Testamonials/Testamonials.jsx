import React from 'react'
import { useState } from "react";
import "./Testamonials.css"
import { testimonialsData} from "../../data/testimonialsData"
import leftArrow from "../../assets/left.png"
import rightArrow from "../../assets/right.png"
import {motion} from "framer-motion"

const Testamonials = () => {
    const transition = {type: "spring", duration : 3}
    const [selected, setSelected] = useState(0)
    const tLength = testimonialsData.length
  return (
   <div className="Testamonials" id='tst' >
    <div className="test-container">
    <div className="left-t">
    <h1 className='tst-header' >Check testimonials for our satisfied clients</h1>
    <motion.img 
        className='tst-img'
        key={selected}
        initial = {{opacity: 0, x: 100 }}
        animate = {{opacity: 1, x: 0}}
        exit = {{opacity: 0, x: -100}}
        transition={{...transition, duration: 2}}
         src={testimonialsData[selected].image} alt="" />
        <span> {testimonialsData[selected].name}
        </span>
        <span>
        {testimonialsData[selected].status}
        </span>
    </div>
    <div className="right-t">
    <motion.span
    key={selected}
    initial = {{opacity: 0, x: -100 }}
    animate = {{opacity: 1, x: 0}}
    exit = {{opacity: 0, x: 100}}
    transition={{...transition, duration: 2}}
    >
        {testimonialsData[selected].review}
    </motion.span>
        <div className="arrows">
            <img 
             onClick = {()=>{
                selected===0?setSelected(tLength-1) :
                setSelected((prev)=> prev -1 )
             }
                }
             src={leftArrow} alt="" />
            <img 
              onClick = {()=>{
                selected===tLength-1?setSelected(0) :
                setSelected((next)=> next + 1 )
             }
                }
             src={rightArrow} alt="" />

        </div>
    </div>
    </div>
   </div>
  )
}

export default Testamonials