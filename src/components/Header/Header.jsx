import React from 'react'
import {useState} from 'react'
import "./Header.css"
import Bars from "../../assets/bars.png"
import {Link} from "react-scroll"

const Header = () => {
  const mobile = window.innerWidth<=768 ? true : false
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <div className='header'>
        {(menuOpened===false &&mobile ===true )? 
        <div style={{backgroundColor: "black",
          padding: "0.5rem",
          borderRadius: "5px"
      }}   
      onClick={()=> setMenuOpened(true)}  ><img src={Bars} alt="" style={{width : "1.5rem", height: "1.5rem"}} /></div>  : (  <ul className='header-menu' >
            <li>
            <Link onClick={()=> setMenuOpened(false)}
            to='home'
            spy={true}
            smooth={true}
            >Home</Link></li>
            <li> <Link onClick={()=> setMenuOpened(false)}
            to='services'
            spy={true}
            smooth={true}
            >Services</Link></li>
            <li> <Link onClick={()=> setMenuOpened(false)}
            to='gs'
            spy={true}
            smooth={true}
            >Get started</Link></li>
            <li > <Link onClick={()=> setMenuOpened(false)}
            to='tst'
            spy={true}
            smooth={true}
            >Testimonials</Link></li>
            <li > <Link onClick={()=> setMenuOpened(false)}
            to='form'
            spy={true}
            smooth={true}
            >Contact Us</Link></li>
            <li><i className="fa-solid fa-magnifying-glass"></i></li>
        </ul> )}

      
    </div>
  )
}

export default Header