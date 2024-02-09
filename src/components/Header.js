import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './style/style.css'

const Header = () => {
    const [clicked, setCliked]=useState('false');
    const HandleClicked=()=>{
        setCliked(!clicked)
    }
  return (
    <div className='header'>      
      <h2>Portfo<span>lio</span></h2>
      <div className={clicked?'nav-links close':'nav-links'}>
        <ul>
         {/* <li><Link className='link' to="/">Home</Link></li>
          <li><Link className='link' to="/about">About</Link></li>
          <li><Link className='link' to="/project">Projects</Link></li>
        <li><Link className='link' to="/contact">Contact</Link></li>     */}
        <li><a href='#'> Home</a></li>
        <li><a href='#about'> About</a></li>
        <li><a href='#skills'> Skills</a></li>
        <li><a href='#project'> Project</a></li>
        
        </ul>
      </div>
      <div className='github-profile'><a href='https://github.com/devpiyushkr'>Github Profile</a></div>
      <div className='menu-icons' onClick={HandleClicked}>
      <i className={clicked? "fa fa-bars" : "fa fa-times"}></i>
      </div>
    </div>
  )
}

export default Header
