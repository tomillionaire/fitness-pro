import React from 'react'
import "./nav.css"
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Nav = () => {
  return (
    <div>
        <nav className='nav'>
            <div className='first'> 
                <img src="./assets/logo.png" alt="" className='logo'/>
            </div>

            <div className='second'>
                <a href="" className='navLinks'>Features</a>
                <a href="" className='navLinks'>Pricing</a>
                <a href="" className='navLinks'>Download</a>
                <a href="" className='navLinks'>Class </a><img src="./assets/Line.png" alt=""/>
                <a href="" className='navLinks'>Lifestyle</a>
            </div>

            <div className='third'>
                < BsFacebook className='navIcons'/>
                <BsTwitter className='navIcons'/>
                <BsInstagram className='navIcons'/>

                <button className='navButton'>Get free trial</button>
            </div>
        </nav>
    </div>
  )
}

export default Nav